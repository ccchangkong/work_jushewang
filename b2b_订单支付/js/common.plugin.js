/*
 * author zhangqs
 */
!function($) {
	$(document).ready(
			function() {
				$.each($("input[class=date],input[class=datetime]"), function(
						i, item) {
					new Kalendae.Input(item, {
						months : 1,
						format : 'YYYY-MM-DD',
						subscribe : {
							'change' : function(date) {
								if ($(this.input).hasClass("datetime")) {
									$(this.input).val(
											this.getSelected() + " 00:00:00");
								} else {
									$(this.input).val(this.getSelected());
								}
								$(this.input).blur();
								return false;
							}
						},
					});
					$(item).unbind("keydown").keydown(function(e) {
						e = window.event || e;
						if (e.keyCode == 8 || e.keyCode == 46) {
							$(this).val("");
						}
						return false;
					});
				});
				
			});

	
	// var jp = {};
	/**
	 * JSON编解码 public method : jp.json.encode(string) jp.json.decode(object)
	 */
	$.json = new function() {
		var useHasOwn = !!{}.hasOwnProperty;
		var pad = function(n) {
			return n < 10 ? "0" + n : n;
		};
		var m = {
			"\b" : '\\b',
			"\t" : '\\t',
			"\n" : '\\n',
			"\f" : '\\f',
			"\r" : '\\r',
			'"' : '\\"',
			"\\" : '\\\\'
		};
		var encodeString = function(s) {
			if (/["\\\x00-\x1f]/.test(s)) {
				return '"'
						+ s.replace(/([\x00-\x1f\\"])/g, function(a, b) {
							var c = m[b];
							if (c) {
								return c;
							}
							c = b.charCodeAt();
							return "\\u00" + Math.floor(c / 16).toString(16)
									+ (c % 16).toString(16);
						}) + '"';
			}
			return '"' + s + '"';
		};
		var encodeArray = function(o) {
			var a = [ "[" ], b, i, l = o.length, v;
			for (i = 0; i < l; i += 1) {
				v = o[i];
				switch (typeof v) {
				case "undefined":
				case "function":
				case "unknown":
					break;
				default:
					if (b) {
						a.push(',');
					}
					a.push(v === null ? "null" : $.json.decode(v));
					b = true;
				}
			}
			a.push("]");
			return a.join("");
		};
		var encodeDate = function(o) {
			return '"' + o.getFullYear() + "-" + pad(o.getMonth() + 1) + "-"
					+ pad(o.getDate()) + "T" + pad(o.getHours()) + ":"
					+ pad(o.getMinutes()) + ":" + pad(o.getSeconds()) + '"';
		};
		this.decode = function(o) {
			if (typeof o == "undefined" || o === null) {
				return "null";
			} else if (o instanceof Array) {
				return encodeArray(o);
			} else if (o instanceof Date) {
				return encodeDate(o);
			} else if (typeof o == "string") {
				return encodeString(o);
			} else if (typeof o == "number") {
				return isFinite(o) ? String(o) : "null";
			} else if (typeof o == "boolean") {
				return String(o);
			} else {
				var a = [ "{" ], b, i, v;
				for (i in o) {
					if (!useHasOwn || o.hasOwnProperty(i)) {
						v = o[i];
						switch (typeof v) {
						case "undefined":
						case "function":
						case "unknown":
							break;
						default:
							if (b) {
								a.push(',');
							}
							a.push(this.decode(i), ":", v === null ? "null"
									: this.decode(v));
							b = true;
						}
					}
				}
				a.push("}");
				return a.join("");
			}
		};
		this.encode = function(json) {
			var json = json ? json.replace(/\u2028/g, '')
					.replace(/\u2029/g, '') : undefined;
			return eval("(" + json + ")");
		};
	};
	
	$.pad = function(num, n) {
		if ((num + "").length >= n) return num;
		return arguments.callee("0" + num, n);
	};
	
	$.dateFormat = function(date, format) {
		format = format ? format : "y-m-d";
		var str = "";
		if (!date) {
			return "";
		}
		switch (format) {
			case "y":
				str = date.getFullYear();
				break;
			case "y-m":
				str = date.getFullYear() + "-" + $.pad(date.getMonth() + 1, 2);
				break;
			case "y-m-d":
				str = date.getFullYear() + "-" + $.pad(date.getMonth() + 1, 2) + "-" + $.pad(date.getDate(), 2);
				break;
			case "h-m-s":
				str = $.pad(date.getHours(), 2) + ":" + $.pad(date.getMinutes(), 2) + ":" + $.pad(date.getSeconds(), 2);
				break;
			case "y-m-d-h-m-s":
				str = date.getFullYear() + "-" + $.pad(date.getMonth() + 1, 2) + "-" + $.pad(date.getDate(), 2) + " " + $.pad(date.getHours(), 2) + ":" + $.pad(date.getMinutes(), 2) + ":" + $.pad(date.getSeconds(), 2);
				break;
			case "y-m-d-h-m-s-t":
				str = date.getFullYear() + "-" + $.pad(date.getMonth() + 1, 2) + "-" + $.pad(date.getDate(), 2) + " " + $.pad(date.getHours(), 2) + ":" + $.pad(date.getMinutes(), 2) + ":" + $.pad(date.getSeconds(), 2) + ":" + $.pad(date.getMilliseconds(), 2);
				break;
		}
		if ($.browser.msie) {
			return str.replace(/-/ig, "/");
		}
		return str;
	};

			// 校验插件
			$.validate = function(node) {
				var flag = true;
				$("input:visible, textarea:visible", node)
						.each(
								function(i, n) {
									var innerFlag = true, title = '', required = $(
											n).attr('ver-required'), pattern = $(
											n).attr("ver-pattern"), length = $(
											n).attr('ver-length'),maxMoney = $(n).attr('ver-maxMoney');
									if (typeof ($(n).data('tooltip')) != 'undefined') {
										$(n).removeData('tooltip');
										$(n).removeClass('ver-error');
									}
									if (required) {
										if ($.trim($(n).val()) == ''
												|| $(n).val() == null) {
											innerFlag = false;
											flag = false;
											title += "此项为必填项 ";
										}
									}
									if ($.trim($(n).val()).length > length) {
										innerFlag = false;
										flag = false;
										title += '字符长度不能超过 ' + length;
									} else {
										if (pattern === "cell") {
											if ($.trim($(n).val())
													&& !/^0?1([3,4,5,7,8]{1}[0-9]{1}){1}[0-9]{8}$/
															.test($.trim($(n)
																	.val()))) {
												innerFlag = false;
												flag = false;
												title = "请输入正确的手机号，如13812345678";
											}
										}
										if (pattern === "qq") {
											if ($.trim($(n).val())
													&& !/^\d{5,10}$/g.test($
															.trim($(n).val()))) {
												innerFlag = false;
												flag = false;
												title = "请输入正确的QQ号";
											}
										}
										if (pattern === "email") {
											if ($.trim($(n).val())
													&& !/^[A-Za-z0-9]+(\.?[\w-]+)*@[\w-]+(\.[\w-]+)+$/
															.test($.trim($(n)
																	.val()))) {
												innerFlag = false;
												flag = false;
												title = "请输入正确的邮箱地址";
											}
										}
										if (pattern === "number") {
											if ($.trim($(n).val())
													&& !/^\d+$/.test($
															.trim($(n).val()))) {
												innerFlag = false;
												flag = false;
												title += "请输入数字 ";
											}
										}
										if (pattern == "money") {
											if ($.trim($(n).val())
													&& !/^[\d]*(.[\d]{1,2})?$/
															.test($.trim($(n)
																	.val()))) {
												innerFlag = false;
												flag = false;
												title += "请输入正确的金额 0.00";
											}else if(parseFloat($.trim($(n).val()))>parseFloat(maxMoney)){
												innerFlag = false;
												flag = false;
												title += "金额不超过 "+maxMoney+"元";
											}
										}
										if (pattern === "onlyCHN") {
											if ($.trim($(n).val())
													&& !/^[\u4E00-\u9FA5]+$/
															.test($.trim($(n)
																	.val()))) {
												innerFlag = false;
												flag = false;
												title = "只允许输入中文";
											}
										}
										if (pattern === "nospecial") {
											if ($.trim($(n).val())
													&& /[。~!@#$%\^\+\*&\\\/\?\|:\.<>{}()';="]/g
															.test($.trim($(n)
																	.val()))) {
												innerFlag = false;
												flag = false;
												title = "不能输入特殊字符";
											}
										}
										if (pattern == "tel") {
											if ($.trim($(n).val())
													&& !/^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/
															.test($.trim($(n)
																	.val()))) {
												innerFlag = false;
												flag = false;
												title = "请输入正确的固话格式";
											}
										}
									}
									if ($(n).attr("ver-title")) {
										title = $(n).attr("ver-title");
									}
									if (!innerFlag) {
										$(n).addClass('ver-error');
										$(n).tooltip({
											title : title
										});
									}
								});
				return flag;
			},

			$.message = new function() {
				this.confirm = function(data, callback) {
					var message = $('<div id="myModalConfirm" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h5 id="myModalLabel" >确认框</h5></div><div class="modal-body"><div class="cfmValue row text-center text-error" style="font-size:16px">你确定要删除吗？</div></div><div class="modal-footer"><button class="btn btn-danger">确定</button><button class="btn" data-dismiss="modal" aria-hidden="true">取消</button></div></div>');
					if ($("#myModalConfirm").length == 0) {
						message.appendTo('body');
					}
					$("#myModalConfirm .row.text-error").text(data);
					$('#myModalConfirm').modal('show');
					$("#myModalConfirm .btn-danger").unbind("click").click(
							function() {
								callback();
								$('#myModalConfirm').modal('hide');
							})

					return false;
				};
				this.alert = function(data, callback) {
					var message = $('<div id="myModalAlert" class="hide fade messagealert" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h5 id="myModalLabel" class="text-error">提示框</h5></div><div class="modal-body"><div class="row text-center" style="font-size: 15px;padding-left:20px;">alert</div><div><button class="btn btn-danger">确定</button></div></div></div>');
					if ($("#myModalAlert").length == 0) {
						message.appendTo('body');
					}
					$("#myModalAlert .row").text(data);
					$('#myModalAlert').modal('show');
					$(".modal-backdrop").unbind("click");
					$("#myModalAlert .btn-danger,#myModalAlert .close").unbind(
							"click").click(function() {
						$('#myModalAlert').modal('hide');
						if (callback != undefined) {
							callback();
						}
					});
				};
			},
			$.form = {
				get : function(node, ignoreHide, type) {
					var datas = this.datas = {};
					if (!node || ($.isArray(node) && node.length === 0)) {
						return {};
					}
					$(
							"input" + (ignoreHide ? ':visible' : '')
									+ ",select"
									+ (ignoreHide ? ':visible' : '')
									+ ",textarea"
									+ (ignoreHide ? ':visible' : ''), $(node))
							.each(
									function(i, n) {
										var nodeName = n && n.nodeName;
										if ($(n).attr("name")) {
											switch (nodeName) {
											case "INPUT":
												switch (n.type) {
												case "checkbox":
													if (!datas[$(n)
															.attr("name")]) {
														datas[$(n).attr("name")] = [];
													}
													if (n.checked) {
														datas[$(n).attr("name")]
																.push(n.value);
													}
													break;
												case "radio":
													if ($(n).attr("value") == "on") {
														if (n.checked) {
															datas[$(n).attr(
																	"name")] = 1;
														} else {
															datas[$(n).attr(
																	"name")] = 0;
														}
													} else {
														if (n.checked) {
															datas[$(n).attr(
																	"name")] = $(
																	n).attr(
																	"value");
														}
													}
													break;
												default:
//													if ($(n).attr(
//															"autocomplete")) {
//														return;
//													}
													datas[$(n).attr("name")] = $
															.trim($(n).val());
												}
												break;
											case "SELECT":
												$("option", n)
														.each(
																function(j, o) {
																	if (o.selected) {
																		if ($(n)
																				.attr(
																						"name")) {
																			datas[$(
																					n)
																					.attr(
																							"name")] = $
																					.trim($(
																							o)
																							.attr(
																									"value"));
																		}
																	}
																});
												break;
											case "TEXTAREA":
												datas[$(n).attr("name")] = $
														.trim($(n).val());
												break;
											}
										}
									});
					if ("undefined" in datas) {
						delete datas["undefined"];
					}
					var returnData = {};
					if (type == "edit") {
						$.each(datas, function(i, item) {
							if (item) {
								returnData[i] = item;
							}
						});
						return returnData;
					}
					return datas;
				},
				set : function(node, data) {
					if (!$.isPlainObject(data)) {
						return;
					}
					if (!node) {
						return;
					}
					for ( var i in data) {
						var input = $("input[name='" + i + "']", $(node));
						switch (input.attr("type")) {
						case "checkbox":
						case "radio":
							if (input.attr("value") == "on") {
								if (parseInt(data[i]) === 1) {
									input[0].checked = true;
								} else {
									input[0].checked = false;
								}
							} else {
								if (input.length > 1) {
									input.each(function(j, n) {
										if (n.value == data[i]) {
											n.checked = true;
										}
									});
								}
							}
							break;
						default:
							input.val(data[i]);
							break;
						}
						var select = $("select[name='" + i + "']", $(node));
						$("option[value='" + data[i] + "']", select).attr(
								"selected", "true");
						var textarea = $("textarea[name='" + i + "']", $(node))
								.val(data[i]);
					}
				}
			},
			/**
			 * Cookie设置
			 * public method :
			 * 		tn.cookie.get(key)
			 * 		tn.cookie.set(key, value, days, path, domain, secure)
			 */
			$.cookie = new function() {
				this.set = function(b, e, i, g, c, f) {
					var a = -1;
					if (tn.type.isNumber(i) && i >= 0) {
						var h = new Date();
						h.setTime(h.getTime() + (i * 86400000));
						a = h.toGMTString();
					} else {
						if (tn.type.isDate(i)) {
							a = i.toGMTString();
						}
					}
					document.cookie = b + "=" + escape(e) + (a != -1 ? ";expires=" + a : "") + (g ? ";path=" + g : "") + (c ? "; domain=" + c : "") + (f ? "; secure" : "");
				};
				this.get = function(a) {
					return (new RegExp(" " + a + "=([^;]*)").test(" " + document.cookie)) ? unescape(RegExp.$1) : "";
				};
				this.clear = function(a) {
					this.set(a, "", -1);
				};
				this.isEnabled = function() {
					if (!tn.type.isBoolean(navigator.cookieEnabled)) {
						var b = "CookieAllowed",
							a = "__BrowserForCookieSupport__";
						this.set(a, test, 90, null);
						navigator.cookieEnabled = (b == this.get(a));
						if (navigator.cookieEnabled) {
							this.remove(a);
						}
					}
					return navigator.cookieEnabled;
				};
			};

}(window.jQuery);
