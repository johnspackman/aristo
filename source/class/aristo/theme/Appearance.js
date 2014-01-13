/* ************************************************************************

   Copyright:
     2010 Guilherme R. Aiolfi

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php

   Authors:
 * Guilherme R. Aiolfi (guilhermeaiolfi)
 * John Spackman (john.spackman@zenesis.com)

   ======================================================================

   This class contains code and resources based on the following work:

 * Aristo
     http://github.com/280north/aristo

     License:
       http://creativecommons.org/licenses/by-sa/3.0/us/

     Authors:
 * 280 North, Inc., http://280north.com/
 * Sofa, http://madebysofa.com/

 ************************************************************************ */

/**
 * The Aristo appearance theme.
 * @asset(aristo.decoration.*)
 */
qx.Theme.define("aristo.theme.Appearance", {
	appearances : {
		"widget" : {},

		"root" : {
			style : function(states) {
				return {
					backgroundColor : "background-application",
					textColor : "text-label",
					font : "default",
					blockerColor : "black",
					blockerOpacity : 0.2
				};
			}
		},

		"label" : {
			style : function(states) {
				return {
				  padding: [ 3, 0, 2, 0 ],
					textColor : states.disabled ? "text-disabled"
							: "text-label"
				};
			}
		},
		
		"image" : {
			style : function(states) {
				return {
					opacity : !states.replacement
							&& states.disabled ? 0.3 : 1
				};
			}
		},
		"atom" : {},
		"atom/label" : {
		  alias: "label",
      style : function(states) {
        return {
          padding: 0,
          textColor : states.disabled ? "text-disabled"
              : "text-label"
        };
      }
		},
		"atom/icon" : "image",

		"move-frame" : {
			style : function(states) {
				return {
					decorator : "main"
				};
			}
		},

		"resize-frame" : "move-frame",
		"window-resize-frame" : "resize-frame",

		"dragdrop-cursor" : {
			style : function(states) {
				var icon = "nodrop";

				if (states.copy) {
					icon = "copy";
				} else if (states.move) {
					icon = "move";
				} else if (states.alias) {
					icon = "alias";
				}

				return {
					source : "aristo/decoration/cursors/"
							+ icon + ".gif",
					position : "right-top",
					offset : [ 2, 16, 2, 6 ]
				};
			}
		},

		"popup" : {
			style : function(states) {
				return {
					decorator : "list",
					backgroundColor : "background-light"
				};
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * BUTTON
		 * ---------------------------------------------------------------------------
		 */

		"button-frame" : {
			alias : "atom",

			style : function(states) {
				var decorator = "button";
				var textColor = undefined;

				if (states.disabled) {
          decorator = "button-disabled";
        } else {
          
          if (states.hovered || states.preselected) {
            decorator = "button-hovered";
            textColor = "text-hovered";
            
          } else if (states.checked) {
            decorator += "-checked";
            
          } else if (states.pressed) {
            decorator += "-pressed";
            textColor = "text-hovered";
          }
          
          if (states.focused)
            decorator += "-focused";
        }

				return {
					decorator : decorator,
					textColor : textColor
				};
			}
		},

		"button-frame/image" : {
			style : function(states) {
				return {
					opacity : !states.replacement
							&& states.disabled ? 0.5 : 1
				};
			}
		},

		"button" : {
			alias : "button-frame",
			include : "button-frame",

			style : function(states) {
				return {
					padding : [ 2, 8 ],
					center : true
				};
			}
		},
		
		"menubutton": "button",

		"hover-button" : {
			alias : "atom",
			include : "atom",

			style : function(states) {
				return {
					decorator : states.hovered ? "selected"
							: undefined,
					textColor : states.hovered ? "text-selected"
							: undefined
				};
			}
		},

		"splitbutton" : {
			style : function(states) {
				return {
				};
			}
		},
		"splitbutton/button" : {
			include : "button",
			style : function(states) {
				return {
				};
			}
		},
		"splitbutton/arrow" : {
			include : "button",

			style : function(states) {
				return {
					icon : "aristo/decoration/arrows/arrow-down.png",
					padding : 2,
					marginLeft : -2
				};
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * LIST
		 * ---------------------------------------------------------------------------
		 */

		"list" : {
			alias : "scrollarea",

			style : function(states) {
				var decorator = "list";

				var focused = !!states.focused;
				var invalid = !!states.invalid;
				var disabled = !!states.disabled;

				if (!disabled) {
					if (focused)
						decorator += "-shadow";
					if (invalid)
						decorator += "-invalid";
				}

				return {
					backgroundColor : "background-light",
					decorator : decorator,
					margin : 2
				};
			}
		},

		"list/pane" : "widget",

		"listitem" : {
			alias : "atom",

			style : function(states) {
				var decorator;
				if (states.dragover) {
					decorator = states.selected ? "selected-dragover"
							: "dragover";
				} else {
					decorator = states.selected ? "selected"
							: undefined;
				}

				return {
					padding : states.dragover ? [ 4, 4, 2, 4 ]
							: 4,
					textColor : states.selected ? "text-selected"
							: undefined,
					decorator : decorator
				};
			}
		},

		"listitem/label" : {
			style : function(states) {
				return {
				  padding: 0,
					textColor : states.selected ? "text-selected"
							: states.disabled ? "text-disabled"
									: "text-label"
				};
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * SCROLLAREA
		 * ---------------------------------------------------------------------------
		 */

		"scrollarea" : {
			style : function(states) {
				return {
					// since the scroll container disregards the
					// min size of the scrollbars
					// we have to set the min size of the scroll
					// area to ensure that the
					// scrollbars always have a usable size.
					minWidth : 50,
					minHeight : 50
				};
			}
		},

		"scrollarea/corner" : {
			style : function(states) {
				return {
					backgroundColor : "background-application"
				};
			}
		},

		"scrollarea/pane" : "widget",
		"scrollarea/scrollbar-x" : "scrollbar",
		"scrollarea/scrollbar-y" : "scrollbar",

		"scrollbar" : {
			style : function(states) {
				if (states["native"]) {
					return {};
				}

				return {
					maxWidth : states.horizontal ? undefined : 13,
					maxHeight : states.horizontal ? 13 : undefined,
					decorator : states.horizontal ? "scrollbar-horizontal" : "scrollbar-vertical",
					padding : 0
				};
			}
		},

		"scrollbar/slider" : {
			alias : "slider",

			style : function(states) {
				return {
					margin : states.horizontal ? [ 1, -6, 0, -6 ] : [ -8, 0, -7, 0 ]
				};
			}
		},

		"scrollbar/slider/knob" : {
			style : function(states) {
				var decorator = states.horizontal ? "scrollbar-slider-horizontal" : "scrollbar-slider-vertical";
				if (states.disabled) {
					decorator += "-disabled";
				}

				return {
					decorator : decorator,
					marginLeft : qx.bom.client.Browser.NAME == "ie" && !states.horizontal ? 2 : 1,
					marginTop : qx.bom.client.Browser.NAME == "ie" && states.horizontal ? 1 : undefined,
					minHeight : states.horizontal ? undefined : 16,
					minWidth : states.horizontal ? 16 : undefined,
					maxWidth: states.horizontal ? undefined : 10,
					maxHeight: states.horizontal ? 10 : undefined
				};
			}
		},

		"scrollbar/button" : {
			alias : "button-frame",
			// include : "button-frame",

			style : function(states) {
				var icon = "aristo/decoration/arrows/arrow-";
				var decorator;
				if (states.left) {
					icon += states.pressed ? "focused-left.png" : "left.png";
					decorator = states.hovered
							|| states.docused ? "scroll-bt-left-focused" : "scroll-bt-left";
				} else if (states.right) {
					icon += states.pressed ? "focused-right.png" : "right.png";
					decorator = states.hovered
							|| states.docused ? "scroll-bt-right-focused" : "scroll-bt-right";
				} else if (states.up) {
					icon += states.pressed ? "focused-up.png" : "up.png";
					decorator = states.hovered
							|| states.focused ? "scroll-bt-up-focused" : "scroll-bt-up";
				} else {
					icon += states.pressed ? "focused-down.png" : "down.png";
					decorator = states.hovered || states.focused ? "scroll-bt-down-focused" : "scroll-bt-down";
				}

				if (states.left || states.right) {
					return {
						padding : [ 0, 0, 0, states.left ? 6 : 16 ],
						icon : icon,
						width : 29,
						height : 13,
						decorator : decorator
					};
				} else {
					return {
						padding : [ states.up ? -10 : 12, 0, 0, 2 ],
						icon : icon,
						width : 13,
						height : 29,
						decorator : decorator
					};
				}
			}
		},

		"scrollbar/button-begin" : "scrollbar/button",
		"scrollbar/button-end" : "scrollbar/button",

		/*
		 * ---------------------------------------------------------------------------
		 * SPINNER
		 * ---------------------------------------------------------------------------
		 */

		"spinner" : {
			style : function(states) {
				var decorator = "input";

				if (!states.disabled) {
					if (!!states.focused)
						decorator += "-shadow";
					if (!!states.readonly)
						decorator += "-readonly";
					else if (!!states.invalid)
						decorator += "-invalid";
				}

				return {
					decorator : decorator,
					margin : 2
				};
			}
		},

		"spinner/textfield" : {
			style : function(states) {
				return {
					marginRight : 2,
					padding : [ 2, 4, 1 ],
					textColor : states.disabled ? "text-disabled"
							: "text-input",
					decorator : "spinner-input"
				};
			}
		},

		"spinner/upbutton" : {
			alias : "button-frame",
			include : "button-frame",

			style : function(states) {
				return {
					icon : "aristo/decoration/arrows/up-small.png",
					padding : states.pressed ? [ 2, 2, 0, 4 ]
							: [ 1, 3, 1, 3 ]
				};
			}
		},

		"spinner/downbutton" : {
			alias : "button-frame",
			include : "button-frame",

			style : function(states) {
				return {
					icon : "aristo/decoration/arrows/down-small.png",
					padding : states.pressed ? [ 2, 2, 0, 4 ]
							: [ 1, 3, 1, 3 ]
				};
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * FORM FIELDS
		 * ---------------------------------------------------------------------------
		 */

		"checkbox" : {
			alias : "atom",

			style : function(states) {
				// "disabled" state is not handled here with
				// purpose. The image widget
				// does handle this already by replacing the
				// current image with a
				// disabled version (if available). If no
				// disabled image is found the
				// opacity style is used.
				var icon;
				if (states.undetermined) {
					if (states.focused) {
						icon = "checkbox-undetermined-focused";
					} else if (states.disabled) {
						icon = "checkbox-undetermined-disabled";
					} else if (states.pressed) {
						icon = "checkbox-undetermined-pressed";
					} else if (states.hovered) {
						icon = "checkbox-undetermined-hovered";
					} else {
						icon = "checkbox-undetermined";
					}
					
				} else if (states.checked) {
					if (states.focused) {
						icon = "checkbox-checked-focused";
					} else if (states.disabled) {
						icon = "checkbox-checked-disabled";
					} else if (states.pressed) {
						icon = "checkbox-checked-pressed";
					} else if (states.hovered) {
						icon = "checkbox-checked-hovered";
					} else {
						icon = "checkbox-checked";
					}
					
				} else {
					if (states.focused) {
						icon = "checkbox-focused";
					} else if (states.pressed) {
						icon = "checkbox-pressed";
					} else if (states.hovered && !states.disabled) {
						icon = "checkbox-hovered";
					} else {
						icon = "checkbox";
					}
				}

				var invalid = states.invalid
						&& !states.disabled ? "-invalid" : "";

				return {
					icon : "aristo/decoration/form/" + icon
							+ invalid + ".png",
					gap : 6
				};
			}
		},
		"radiobutton" : {
			alias : "atom",

			style : function(states) {
				var icon = "radiobutton";

				if (states.checked)
					icon += "-checked";
				if (states.pressed)
					icon += "-pressed";
				if (states.focused)
					icon += "-focused";
				if (states.hovered && !states.pressed)
					icon += "-hovered";
				if (states.invalid)
					icon += "-invalid";
				if (states.disabled)
					icon += "-disabled";

				return {
					icon : "aristo/decoration/form/" + icon
							+ ".png",
					gap : 6
				};
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * SELECTBOX
		 * ---------------------------------------------------------------------------
		 */

		"selectbox" : {
			alias : "button-frame",
			include : "button-frame",

			style : function(states) {
				return {
					padding : [ 2, 8 ],
					margin : 2
				};
			}
		},

		"selectbox/atom" : "atom",
		"selectbox/popup" : "popup",

		"selectbox/list" : {
			alias : "list"
		},

		"selectbox/arrow" : {
			include : "image",

			style : function(states) {
				return {
					source : "aristo/decoration/arrows/arrow-down.png",
					paddingLeft : 5
				};
			}
		},

		"textfield" : {
			style : function(states) {
				var decorator = "input";

				if (!!states.disabled)
				  decorator += "-disabled";
				else {
					if (!!states.focused)
						decorator += "-shadow";
					if (!!states.readonly)
						decorator += "-readonly";
					else if (!!states.invalid)
						decorator += "-invalid";
				}

				var textColor;
				if (!!states.disabled) {
					textColor = "text-disabled";
				} else if (states.showingPlaceholder) {
					textColor = "text-placeholder";
				} else if (!!states.readonly) {
					textColor = "text-readonly";
				} else {
					textColor = "text-input";
				}

				return {
					decorator : decorator,
					padding : [ 2, 4, 1 ],
					textColor : textColor,
					margin : 2
				};
			}
		},

		"textarea" : {
			include : "textfield",

			style : function(states) {
				return {
					padding : 4,
					margin : 2
				};
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * WINDOW
		 * ---------------------------------------------------------------------------
		 */

		"window" : {
			style : function(states) {
				return {
					decorator : (states.active ? "window-active" : "window"),
					contentPadding : [ 10, 10, 10, 10 ]
				};
			}
		},

		"window/pane" : {
			style : function(states) {
				return {
					decorator : "window"
				};
			}
		},

		"window/captionbar" : {
			style : function(states) {
				return {
					decorator : states.active ? "window-captionbar-active"
							: "window-captionbar",
					textColor : states.active ? "text-label"
							: "text-disabled",
					minHeight : 28,
					maxHeight : 28,
					paddingRight : 2
				};
			}
		},

		"window/title" : {
			style : function(states) {
				return {
					textAlign : "center",
					alignY : "middle",
					font : "bold",
					marginLeft : 6,
					marginRight : 6
				};
			}
		},

		"window/minimize-button" : {
			alias : "atom",

			style : function(states) {
				return {
					icon : states.active ? states.hovered ? "aristo/decoration/window/minimize-active-hovered.png"
							: "aristo/decoration/window/minimize-active.png"
							: "aristo/decoration/window/minimize-inactive.png",
					margin : [ 2, 3, 2, 0 ]
				};
			}
		},

		"window/restore-button" : {
			alias : "atom",

			style : function(states) {
				return {
					icon : states.active ? states.hovered ? "aristo/decoration/window/restore-active-hovered.png"
							: "aristo/decoration/window/restore-active.png"
							: "aristo/decoration/window/restore-inactive.png",
					margin : [ 2, 3, 2, 0 ]
				};
			}
		},

		"window/maximize-button" : {
			alias : "atom",

			style : function(states) {
				return {
					icon : states.active ? states.hovered ? "aristo/decoration/window/maximize-active-hovered.png"
							: "aristo/decoration/window/maximize-active.png"
							: "aristo/decoration/window/maximize-inactive.png",
					margin : [ 2, 3, 2, 0 ]
				};
			}
		},

		"window/close-button" : {
			alias : "atom",

			style : function(states) {
				return {
					icon : states.active ? states.hovered ? "aristo/decoration/window/close-active-hovered.png"
							: "aristo/decoration/window/close-active.png"
							: "aristo/decoration/window/close-inactive.png",
					margin : [ 2, 3, 2, 0 ]
				};
			}
		},

		"window/close-button/icon" : "window/icon",
		"window/maximize-button/icon" : "window/icon",
		"window/restore-button/icon" : "window/icon",
		"window/minimize-button/icon" : "window/icon",
		"window/icon" : {
			style : function(states) {
				return {
					alignY : "middle",
					marginLeft : 5,
					height : 16,
					width : 16
				};
			}
		},

		"window/statusbar" : {
			style : function(states) {
				return {
					padding : [ 2, 6 ],
					decorator : "window-statusbar",
					minHeight : 18
				};
			}
		},

		"window/statusbar-text" : {
			style : function(states) {
				return {
					font : "small"
				};
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * PROGRESSBAR
		 * ---------------------------------------------------------------------------
		 */
		"progressbar" : {
			style : function(states) {
				return {
					decorator : "progressbar",
					padding : 1,
					backgroundColor : "background-light"
				};
			}
		},

		"progressbar/progress" : {
			style : function(states) {
				return {
					backgroundColor : states.disabled ? "text-disabled"
							: "button-gradient-end"
				};
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * TOOLBAR
		 * ---------------------------------------------------------------------------
		 */

		"toolbar" : {
			style : function(states) {
				return {
					decorator : "toolbar",
					spacing : 2
				};
			}
		},

		"toolbar-window" : {
			include : "toolbar",
			style : function(states) {
				return {
					margin : -10,
					decorator : "toolbar-window"
				};
			}
		},

		"toolbar/part" : {
			style : function(states) {
				return {
					decorator : "toolbar-part",
					spacing : 2
				};
			}
		},

		"toolbar/part/container" : {
			style : function(states) {
				return {
					paddingLeft : 2,
					paddingRight : 2
				};
			}
		},

		"toolbar/part/handle" : {
			style : function(states) {
				return {
					source : "aristo/decoration/toolbar/toolbar-handle-knob.gif",
					marginLeft : 3,
					marginRight : 3
				};
			}
		},

		"toolbar-button" : {
			alias : "atom",

			style : function(states) {
				return {
					marginTop : 2,
					marginBottom : 2,
					padding : 5,
					decorator : states.pressed
							|| (states.checked && !states.hovered)
							|| (states.checked && states.disabled) ? "toolbar-button-checked"
							: states.hovered
									&& !states.disabled ? "toolbar-button-hovered"
									: "toolbar-button"
				};
			}
		},

		"toolbar-menubutton" : {
			alias : "toolbar-button",
			include : "toolbar-button",

			style : function(states) {
				return {
					showArrow : true
				};
			}
		},

		"toolbar-menubutton/arrow" : {
			alias : "image",
			include : "image",

			style : function(states) {
				return {
					source : "aristo/decoration/arrows/down-small.png"
				};
			}
		},

		"toolbar-splitbutton" : {
			style : function(states) {
				return {
					marginTop : 2,
					marginBottom : 2
				};
			}
		},

		"toolbar-splitbutton/button" : {
			alias : "toolbar-button",
			include : "toolbar-button",

			style : function(states) {
				return {
					icon : "aristo/decoration/arrows/down.png",
					marginTop : undefined,
					marginBottom : undefined
				};
			}
		},

		"toolbar-splitbutton/arrow" : {
			alias : "toolbar-button",
			include : "toolbar-button",

			style : function(states) {
				if (states.pressed || states.checked
						|| (states.hovered && !states.disabled)) {
					var padding = 1;
				} else {
					var padding = 3;
				}

				return {
					padding : padding,
					icon : "aristo/decoration/arrows/down.png",
					marginTop : undefined,
					marginBottom : undefined
				};
			}
		},

		"toolbar-separator" : {
			style : function(states) {
				return {
					decorator : "toolbar-separator",
					margin : 7
				};
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * SLIDER
		 * ---------------------------------------------------------------------------
		 */

		"slider" : {
			style : function(states) {
				var decorator = states.horizontal ? "slider-horizontal" : "slider-vertical";

				return {
					decorator : decorator,
					maxHeight : states.horizontal ? 20 : undefined,
					maxWidth : states.horizontal ? undefined : 20,
					minHeight : states.horizontal ? 20 : undefined,
					minWidth : states.horizontal ? undefined : 20,
					padding : 0
				};
			}
		},

		"slider/knob" : {
			alias : "atom",
			include : "atom",

			style : function(states) {
				return {
					decorator : states.disabled ? "slider-knob-disabled"
							: states.focused ? "slider-knob-focused"
									: "slider-knob",
					maxHeight : 18,
					// minHeight: 17,
					// marginTop: -0,
					maxWidth : 18
				};
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * MENU
		 * ---------------------------------------------------------------------------
		 */

		"menu" : {
			style : function(states) {
				var result = {
					decorator : "menu",
					spacingX : 6,
					spacingY : 1,
					iconColumnWidth : 16,
					arrowColumnWidth : 4,
					placementModeY : states.submenu
							|| states.contextmenu ? "best-fit"
							: "keep-align"
				};

				if (states.submenu) {
					result.position = "right-top";
					result.offset = [ -2, -3 ];
				}

				return result;
			}
		},

		"menu/slidebar" : "menu-slidebar",

		"menu-slidebar" : "widget",

		"menu-slidebar-button" : {
			style : function(states) {
				return {
					decorator : states.hovered ? "selected"
							: undefined,
					padding : 7,
					center : true
				};
			}
		},

		"menu-slidebar/button-backward" : {
			include : "menu-slidebar-button",

			style : function(states) {
				return {
					icon : states.hovered ? "aristo/decoration/arrows/up-invert.png"
							: "aristo/decoration/arrows/up.png"
				};
			}
		},

		"menu-slidebar/button-forward" : {
			include : "menu-slidebar-button",

			style : function(states) {
				return {
					icon : states.hovered ? "aristo/decoration/arrows/down-invert.png"
							: "aristo/decoration/arrows/down.png"
				};
			}
		},

		"menu-separator" : {
			style : function(states) {
				return {
					height : 0,
					decorator : "menu-separator",
					margin : [ 4, 2 ]
				};
			}
		},

		"menu-button" : {
			alias : "atom",

			style : function(states) {
				return {
					decorator : states.selected ? "selected"
							: undefined,
					textColor : states.selected ? "text-selected"
							: undefined,
					padding : [ 4, 6 ]
				};
			}
		},

		"menu-button/icon" : {
			include : "image",

			style : function(states) {
				return {
					alignY : "middle"
				};
			}
		},

		"menu-button/label" : {
			include : "label",

			style : function(states) {
				return {
					alignY : "middle",
					padding : 1
				};
			}
		},

		"menu-button/shortcut" : {
			include : "label",

			style : function(states) {
				return {
					alignY : "middle",
					marginLeft : 14,
					padding : 1
				};
			}
		},

		"menu-button/arrow" : {
			include : "image",

			style : function(states) {
				return {
					source : states.selected ? "aristo/decoration/arrows/right-invert.png"
							: "aristo/decoration/arrows/right.png",
					alignY : "middle"
				};
			}
		},

		"menu-checkbox" : {
			alias : "menu-button",
			include : "menu-button",

			style : function(states) {
				return {
					icon : !states.checked ? undefined
							: states.selected ? "aristo/decoration/menu/checkbox-invert.gif"
									: "aristo/decoration/menu/checkbox.gif"
				};
			}
		},

		"menu-radiobutton" : {
			alias : "menu-button",
			include : "menu-button",

			style : function(states) {
				return {
					icon : !states.checked ? undefined
							: states.selected ? "aristo/decoration/menu/radiobutton-invert.gif"
									: "aristo/decoration/menu/radiobutton.gif"
				};
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * MENU BAR
		 * ---------------------------------------------------------------------------
		 */

		"menubar" : {
			style : function(states) {
				return {
					decorator : "menubar"
				};
			}
		},

		"menubar-button" : {

			style : function(states) {
				return {
					decorator : (states.pressed || states.hovered)
							&& !states.disabled ? "selected"
							: undefined,
					textColor : states.pressed || states.hovered ? "text-selected" : undefined,
					padding : [ 3, 8 ]
				};
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * DATEFIELD
		 * ---------------------------------------------------------------------------
		 */

		"datefield" : "combobox",

		"datefield/button" : {
			alias : "combobox/button",
			include : "combobox/button",

			style : function(states) {
				return {
					icon : "aristo/decoration/icons/16x16/calendar.png",
					padding : [ 0, 3 ],
					decorator : "blank",
					marginLeft : -3
				};
			}
		},

		"datefield/textfield" : "combobox/textfield",

		"datefield/list" : {
			alias : "datechooser",
			include : "datechooser",

			style : function(states) {
				return {
					decorator : undefined
				};
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * DATE CHOOSER
		 * ---------------------------------------------------------------------------
		 */

		"datechooser" : {
			style : function(states) {
				var decorator;

				var focused = !!states.focused;
				var invalid = !!states.invalid;
				var disabled = !!states.disabled;

				if (focused && invalid && !disabled) {
					decorator = "input-focused-invalid";
				} else if (focused && !invalid && !disabled) {
					decorator = "input-focused";
				} else if (disabled) {
					decorator = "input-disabled";
				} else if (!focused && invalid && !disabled) {
					decorator = "border-invalid";
				} else {
					decorator = "input";
				}

				return {
					padding : 2,
					decorator : decorator,
					backgroundColor : "background-light"
				};
			}
		},

		"datechooser/navigation-bar" : {},

		"datechooser/nav-button" : {
			include : "button-frame",
			alias : "button-frame",

			style : function(states) {
				var result = {
					padding : [ 2, 4 ]
				};

				if (states.lastYear) {
					result.icon = "aristo/decoration/arrows/rewind.png";
					result.marginRight = 1;
				} else if (states.lastMonth) {
					result.icon = "aristo/decoration/arrows/left.png";
				} else if (states.nextYear) {
					result.icon = "aristo/decoration/arrows/forward.png";
					result.marginLeft = 1;
				} else if (states.nextMonth) {
					result.icon = "aristo/decoration/arrows/right.png";
				}

				return result;
			}
		},

		"datechooser/last-year-button-tooltip" : "tooltip",
		"datechooser/last-month-button-tooltip" : "tooltip",
		"datechooser/next-year-button-tooltip" : "tooltip",
		"datechooser/next-month-button-tooltip" : "tooltip",

		"datechooser/last-year-button" : "datechooser/nav-button",
		"datechooser/last-month-button" : "datechooser/nav-button",
		"datechooser/next-month-button" : "datechooser/nav-button",
		"datechooser/next-year-button" : "datechooser/nav-button",

		"datechooser/month-year-label" : {
			style : function(states) {
				return {
					font : "bold",
					textAlign : "center",
					textColor : states.disabled ? "text-disabled"
							: undefined
				};
			}
		},

		"datechooser/date-pane" : {
			style : function(states) {
				return {
					textColor : states.disabled ? "text-disabled"
							: undefined,
					marginTop : 2
				};
			}
		},

		"datechooser/weekday" : {
			style : function(states) {
				return {
					textColor : states.disabled ? "text-disabled"
							: states.weekend ? "text-light"
									: undefined,
					textAlign : "center",
					paddingTop : 2,
					backgroundColor : "background-medium"
				};
			}
		},

		"datechooser/week" : {
			style : function(states) {
				return {
					textAlign : "center",
					padding : [ 2, 4 ],
					backgroundColor : "background-medium"
				};
			}
		},

		"datechooser/day" : {
			style : function(states) {
				return {
					textAlign : "center",
					decorator : states.disabled ? undefined
							: states.selected ? "selected"
									: undefined,
					textColor : states.disabled ? "text-disabled"
							: states.selected ? "text-selected"
									: states.otherMonth ? "text-light"
											: undefined,
					font : states.today ? "bold" : undefined,
					padding : [ 2, 4 ]
				};
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * COMBOBOX
		 * ---------------------------------------------------------------------------
		 */

		"combobox" : {
			style : function(states) {
				var decorator = "input";

				var focused = !!states.focused;
				var invalid = !!states.invalid;
				var disabled = !!states.disabled;
				
				if (!disabled) {
					if (focused)
						decorator += "-shadow";
					if (invalid)
						decorator += "-invalid";
				}

				return {
					decorator : decorator
				};
			}
		},

		"combobox/popup" : "popup",

		"combobox/list" : {
			alias : "list"
		},

		"combobox/button" : {
			include : "button-frame",
			alias : "button-frame",

			style : function(states) {
				var ret = {
					icon : "aristo/decoration/arrows/arrow-down.png",
					padding : 2
				};

				if (states.selected) {
					ret.decorator = "button-focused";
				}

				return ret;
			}
		},

		"combobox/textfield" : {
			include : "textfield",

			style : function(states) {
				return {
					decorator : "blank",
					padding : 3,
					margin : undefined
				};
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * TOOL TIP
		 * ---------------------------------------------------------------------------
		 */

		"tooltip" : {
			include : "popup",

			style : function(states) {
				return {
					backgroundColor : "background-tip",
					padding : [ 1, 3, 2, 3 ],
					offset : [ 15, 5, 5, 5 ]
				};
			}
		},

		"tooltip/atom" : "atom",

		"tooltip-error" : {
			include : "tooltip",

			style : function(states) {
				return {
					textColor : "text-selected",
					placeMethod : "widget",
					offset : [ 0, 0, 0, 14 ],
					marginTop : -2,
					position : "right-top",
					showTimeout : 100,
					hideTimeout : 10000,
					decorator : "tooltip-error",
					font : "bold"
				};
			}
		},

		"tooltip-error/atom" : "atom",

		/*
		 * ---------------------------------------------------------------------------
		 * GROUP BOX
		 * ---------------------------------------------------------------------------
		 */

		"groupbox" : {
			style : function(states) {
				return {
					legendPosition : "top"
				};
			}
		},

		"groupbox/legend" : {
			alias : "atom",

			style : function(states) {
				return {
					padding : [ 1, 0, 1, 4 ],
					textColor : states.invalid ? "invalid" : "text-title",
					font : "bold"
				};
			}
		},

		"groupbox/frame" : {
			style : function(states) {
				return {
					padding : 12,
					decorator : "group"
				};
			}
		},

		"check-groupbox" : "groupbox",

		"check-groupbox/legend" : {
			alias : "checkbox",
			include : "checkbox",

			style : function(states) {
				return {
					padding : [ 1, 0, 1, 4 ],
					textColor : states.invalid ? "invalid" : "text-title",
					font : "bold"
				};
			}
		},

		"radio-groupbox" : "groupbox",

		"radio-groupbox/legend" : {
			alias : "radiobutton",
			include : "radiobutton",

			style : function(states) {
				return {
					padding : [ 1, 0, 1, 4 ],
					textColor : states.invalid ? "invalid"
							: "text-title",
					font : "bold"
				};
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * TABVIEW
		 * ---------------------------------------------------------------------------
		 */

		"tabview" : {
			style : function(states) {
				return {
					contentPadding : 16
				};
			}
		},

		"tabview/bar" : {
			alias : "slidebar",

			style : function(states) {
				var result = {
					marginBottom : states.barTop ? -1 : 0,
					marginTop : states.barBottom ? -1 : 0,
					marginLeft : states.barRight ? -1 : 0,
					marginRight : states.barLeft ? -1 : 0,
					paddingTop : 0,
					paddingRight : 0,
					paddingBottom : 0,
					paddingLeft : 0
				};

				if (states.barTop || states.barBottom) {
					result.paddingLeft = 0;
					result.paddingRight = 7;
				} else {
					result.paddingTop = 0;
					result.paddingBottom = 7;
				}

				return result;
			}
		},

		"tabview/bar/button-forward" : {
			include : "slidebar/button-forward",
			alias : "slidebar/button-forward",

			style : function(states) {
				if (states.barTop || states.barBottom) {
					return {
						marginTop : 2,
						marginBottom : 2
					};
				} else {
					return {
						marginLeft : 2,
						marginRight : 2
					};
				}
			}
		},

		"tabview/bar/button-backward" : {
			include : "slidebar/button-backward",
			alias : "slidebar/button-backward",

			style : function(states) {
				if (states.barTop || states.barBottom) {
					return {
						marginTop : 2,
						marginBottom : 2
					};
				} else {
					return {
						marginLeft : 2,
						marginRight : 2
					};
				}
			}
		},

		"tabview/bar/scrollpane" : {},

		"tabview/pane" : {
			style : function(states) {
				/*
				 * default tabview does not forward states to the pane
				 */
				return {
					decorator : states.barTop ? "tabview-pane-top" :
						states.barRight ? "tabview-pane-right" :
						states.barBottom ? "tabview-pane-bottom" :
						states.barLeft ? "tabview-pane-left" :
							"tabview-pane",
					minHeight : 100,

					marginBottom : states.barBottom ? -1 : 0,
					marginTop : states.barTop ? -1 : 0,
					marginLeft : states.barLeft ? -1 : 0,
					marginRight : states.barRight ? -1 : 0
				};
			}
		},

		"tabview-page" : "widget",

		"tabview-page/button" : {
			alias : "atom",

			style : function(states) {
				var decorator, padding = 0;
				var marginTop = 0, marginBottom = 0, marginLeft = 0, marginRight = 0;
				
				if (states.barTop || states.barBottom) {
					padding = [ 4, 10 ];
				} else {
					padding = [ 5, 6 ];
				}

				if (states.checked) {
					if (states.barTop) {
						decorator = "tabview-page-button-top-active";
						marginTop = 2;
						marginRight = states.lastTab ? 0 : -5;
						marginLeft = states.firstTab ? 0 : -5;
					} else if (states.barBottom) {
						decorator = "tabview-page-button-bottom-active";
						marginBottom = 2;
						marginLeft = states.firstTab ? 0 : -5;
						marginRight = states.lastTab ? 0 : -5;
					} else if (states.barRight) {
						marginRight = 0;
						decorator = "tabview-page-button-right-active";
						marginTop = states.firstTab ? 0 : -4;
						marginBottom = states.lastTab ? 0 : -4;
					} else {
						decorator = "tabview-page-button-left-active";
						marginTop = states.firstTab ? 0 : -4;
						marginBottom = states.lastTab ? 0 : -4;
					}
				} else {
					if (states.barTop) {
						decorator = "tabview-page-button-top-inactive";
						marginTop = 4;
						marginRight = -1;
						marginLeft = 0;
					} else if (states.barBottom) {
						decorator = "tabview-page-button-bottom-inactive";
						marginBottom = 4;
						marginRight = -1;
						marginLeft = 0;
					} else if (states.barRight) {
						decorator = "tabview-page-button-right-inactive";
						marginRight = 3;
						marginTop = 0;
						marginBottom = -1;
						marginLeft = 0;
					} else {
						decorator = "tabview-page-button-left-inactive";
						marginLeft = 3;
						marginTop = 0;
						marginBottom = -1;
						marginRight = 0;
					}
				}
				
				/*
				padding = [ 4, 10 ];
				marginLeft = 0;
				marginTop = 0;
				marginRight = 0;
				marginBottom = 0;
				
				if (states.checked && states.barTop) {
					marginLeft = -2;
					marginRight = -2;
				}
				*/

				return {
					zIndex : states.checked ? 10 : 5,
					decorator : decorator,
					padding : padding,
					marginTop : marginTop,
					marginBottom : marginBottom,
					marginLeft : marginLeft,
					marginRight : marginRight,
					textColor : states.checked ? "text-active"
							: states.disabled ? "text-disabled"
									: "text-inactive"
				};
			}
		},

		"tabview-page/button/close-button" : {
			alias : "atom",
			style : function(states) {
				return {
					icon : "aristo/decoration/window/close-active.png"
				};
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * SLIDEBAR
		 * ---------------------------------------------------------------------------
		 */

		"slidebar" : {},
		"slidebar/scrollpane" : {},
		"slidebar/content" : {},

		"slidebar/button-forward" : {
			alias : "button-frame",
			include : "button-frame",

			style : function(states) {
				return {
					padding : 5,
					center : true,
					icon : states.vertical ? "aristo/decoration/arrows/down.png"
							: "aristo/decoration/arrows/right.png"
				};
			}
		},

		"slidebar/button-backward" : {
			alias : "button-frame",
			include : "button-frame",

			style : function(states) {
				return {
					padding : 5,
					center : true,
					icon : states.vertical ? "aristo/decoration/arrows/up.png"
							: "aristo/decoration/arrows/left.png"
				};
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * TREE
		 * ---------------------------------------------------------------------------
		 */

		"tree" : "list",

		"tree-item" : {
			style : function(states) {
				return {
					padding : [ 2, 6 ],
					textColor : states.selected ? "text-selected"
							: undefined,
					decorator : states.selected ? "selected"
							: undefined
				};
			}
		},

		"tree-item/icon" : {
			include : "image",

			style : function(states) {
				return {
					paddingRight : 5
				};
			}
		},

		"tree-item/label" : "label",

		"tree-item/open" : {
			include : "image",

			style : function(states) {
				var icon;
				if (states.selected && states.opened) {
					icon = "aristo/decoration/tree/open-selected.png";
				} else if (states.selected && !states.opened) {
					icon = "aristo/decoration/tree/closed-selected.png";
				} else if (states.opened) {
					icon = "aristo/decoration/tree/open.png";
				} else {
					icon = "aristo/decoration/tree/closed.png";
				}

				return {
					padding : [ 0, 5, 0, 2 ],
					source : icon
				};
			}
		},

		"tree-folder" : {
			include : "tree-item",
			alias : "tree-item",

			style : function(states) {
				var icon;
				if (states.small) {
					icon = states.opened ? "icon/16/places/folder-open.png"
							: "icon/16/places/folder.png";
				} else if (states.large) {
					icon = states.opened ? "icon/32/places/folder-open.png"
							: "icon/32/places/folder.png";
				} else {
					icon = states.opened ? "icon/22/places/folder-open.png"
							: "icon/22/places/folder.png";
				}

				return {
					icon : icon
				};
			}
		},

		"tree-file" : {
			include : "tree-item",
			alias : "tree-item",

			style : function(states) {
				return {
					icon : states.small ? "icon/16/mimetypes/office-document.png"
							: states.large ? "icon/32/mimetypes/office-document.png"
									: "icon/22/mimetypes/office-document.png"
				};
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * TREEVIRTUAL
		 * ---------------------------------------------------------------------------
		 */

		"treevirtual" : "table",

		"treevirtual-folder" : {
			style : function(states) {
				return {
					icon : states.opened ? "icon/16/places/folder-open.png"
							: "icon/16/places/folder.png"
				};
			}
		},

		"treevirtual-file" : {
			include : "treevirtual-folder",
			alias : "treevirtual-folder",

			style : function(states) {
				return {
					icon : "icon/16/mimetypes/office-document.png"
				};
			}
		},

		"treevirtual-line" : {
			style : function(states) {
				return {
					icon : "qx/static/blank.gif"
				};
			}
		},

		"treevirtual-contract" : {
			style : function(states) {
				return {
					icon : "aristo/decoration/tree/open.png",
					paddingLeft : 5,
					paddingTop : 2
				};
			}
		},

		"treevirtual-expand" : {
			style : function(states) {
				return {
					icon : "aristo/decoration/tree/closed.png",
					paddingLeft : 5,
					paddingTop : 2
				};
			}
		},

		"treevirtual-only-contract" : "treevirtual-contract",
		"treevirtual-only-expand" : "treevirtual-expand",
		"treevirtual-start-contract" : "treevirtual-contract",
		"treevirtual-start-expand" : "treevirtual-expand",
		"treevirtual-end-contract" : "treevirtual-contract",
		"treevirtual-end-expand" : "treevirtual-expand",
		"treevirtual-cross-contract" : "treevirtual-contract",
		"treevirtual-cross-expand" : "treevirtual-expand",

		"treevirtual-end" : {
			style : function(states) {
				return {
					icon : "qx/static/blank.gif"
				};
			}
		},

		"treevirtual-cross" : {
			style : function(states) {
				return {
					icon : "qx/static/blank.gif"
				};
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * IFRAME
		 * ---------------------------------------------------------------------------
		 */

		"iframe" : {
			style : function(states) {
				return {
					decorator : "main"
				};
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * RESIZER
		 * ---------------------------------------------------------------------------
		 */

		"resizer" : {
			style : function(states) {
				return {
					decorator : "pane"
				};
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * SPLITPANE
		 * ---------------------------------------------------------------------------
		 */

		"splitpane" : {
			style : function(states) {
				return {
					decorator : "splitpane"
				};
			}
		},

		"splitpane/splitter" : {
			style : function(states) {
				return {
					width : states.horizontal ? 3 : undefined,
					height : states.vertical ? 3 : undefined,
					backgroundColor : "background-splitpane"
				};
			}
		},

		"splitpane/splitter/knob" : {
			style : function(states) {
				return {
					source : states.horizontal ? "aristo/decoration/splitpane/knob-horizontal.png"
							: "aristo/decoration/splitpane/knob-vertical.png"
				};
			}
		},

		"splitpane/slider" : {
			style : function(states) {
				return {
					width : states.horizontal ? 3 : undefined,
					height : states.vertical ? 3 : undefined,
					backgroundColor : "background-splitpane"
				};
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * COLOR SELECTOR
		 * ---------------------------------------------------------------------------
		 */

		"colorselector" : "widget",
		"colorselector/control-bar" : "widget",
		"colorselector/control-pane" : "widget",
		"colorselector/visual-pane" : "groupbox",
		"colorselector/preset-grid" : "widget",

		"colorselector/colorbucket" : {
			style : function(states) {
				return {
					decorator : "main",
					width : 16,
					height : 16
				};
			}
		},

		"colorselector/preset-field-set" : "groupbox",
		"colorselector/input-field-set" : "groupbox",
		"colorselector/preview-field-set" : "groupbox",

		"colorselector/hex-field-composite" : "widget",
		"colorselector/hex-field" : "textfield",

		"colorselector/rgb-spinner-composite" : "widget",
		"colorselector/rgb-spinner-red" : "spinner",
		"colorselector/rgb-spinner-green" : "spinner",
		"colorselector/rgb-spinner-blue" : "spinner",

		"colorselector/hsb-spinner-composite" : "widget",
		"colorselector/hsb-spinner-hue" : "spinner",
		"colorselector/hsb-spinner-saturation" : "spinner",
		"colorselector/hsb-spinner-brightness" : "spinner",

		"colorselector/preview-content-old" : {
			style : function(states) {
				return {
					decorator : "main",
					width : 50,
					height : 10
				};
			}
		},

		"colorselector/preview-content-new" : {
			style : function(states) {
				return {
					decorator : "main",
					backgroundColor : "background-light",
					width : 50,
					height : 10
				};
			}
		},

		"colorselector/hue-saturation-field" : {
			style : function(states) {
				return {
					decorator : "main",
					margin : 5
				};
			}
		},

		"colorselector/brightness-field" : {
			style : function(states) {
				return {
					decorator : "main",
					margin : [ 5, 7 ]
				};
			}
		},

		"colorselector/hue-saturation-pane" : "widget",
		"colorselector/hue-saturation-handle" : "widget",
		"colorselector/brightness-pane" : "widget",
		"colorselector/brightness-handle" : "widget",

		/*
		 * ---------------------------------------------------------------------------
		 * COLOR POPUP
		 * ---------------------------------------------------------------------------
		 */

		"colorpopup" : {
			alias : "popup",
			include : "popup",

			style : function(states) {
				return {
					padding : 5,
					backgroundColor : "background-application"
				};
			}
		},

		"colorpopup/field" : {
			style : function(states) {
				return {
					decorator : "main",
					margin : 2,
					width : 14,
					height : 14,
					backgroundColor : "background-light"
				};
			}
		},

		"colorpopup/selector-button" : "button",
		"colorpopup/auto-button" : "button",
		"colorpopup/preview-pane" : "groupbox",

		"colorpopup/current-preview" : {
			style : function(state) {
				return {
					height : 20,
					padding : 4,
					marginLeft : 4,
					decorator : "main",
					allowGrowX : true
				};
			}
		},

		"colorpopup/selected-preview" : {
			style : function(state) {
				return {
					height : 20,
					padding : 4,
					marginRight : 4,
					decorator : "main",
					allowGrowX : true
				};
			}
		},

		"colorpopup/colorselector-okbutton" : {
			alias : "button",
			include : "button",

			style : function(states) {
				return {
					icon : "icon/16/actions/dialog-ok.png"
				};
			}
		},

		"colorpopup/colorselector-cancelbutton" : {
			alias : "button",
			include : "button",

			style : function(states) {
				return {
					icon : "icon/16/actions/dialog-cancel.png"
				};
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * TABLE
		 * ---------------------------------------------------------------------------
		 */

		"table" : {
			alias : "widget",

			style : function(states) {
				return {
					decorator : "table"
				};
			}
		},

		"table-header" : {},

		"table/statusbar" : {
			style : function(states) {
				return {
					decorator : "table-statusbar",
					padding : [ 0, 2 ]
				};
			}
		},

		"table/column-button" : {
			alias : "button-frame",

			style : function(states) {
				return {
					decorator : "table-column-button",
					padding : 3,
					icon : "aristo/decoration/table/select-column-order.png"
				};
			}
		},

		"table-column-reset-button" : {
			include : "menu-button",
			alias : "menu-button",

			style : function() {
				return {
					icon : "icon/16/actions/view-refresh.png"
				};
			}
		},

		"table-scroller" : "widget",

		"table-scroller/scrollbar-x" : "scrollbar",
		"table-scroller/scrollbar-y" : "scrollbar",

		"table-scroller/header" : {
			style : function(states) {
				return {
					decorator : "table-scroller-header",
					font : "bold"
				};
			}
		},

		"table-scroller/pane" : {
			style : function(states) {
				return {
					backgroundColor : "table-pane"
				};
			}
		},

		"table-scroller/focus-indicator" : {
			style : function(states) {
				return {
					decorator : "table-scroller-focus-indicator"
				};
			}
		},

		"table-scroller/resize-line" : {
			style : function(states) {
				return {
					backgroundColor : "border-separator",
					width : 2
				};
			}
		},

		"table-header-cell" : {
			alias : "atom",
			style : function(states) {
				return {
					minWidth : 13,
					minHeight : 33,
					padding : states.hovered ? [ 3, 6, 2, 6 ]
							: [ 3, 6 ],
					decorator : states.hovered ? "table-header-cell-hovered"
							: "table-header-cell",
					sortIcon : states.sorted ? (states.sortedAscending ? "aristo/decoration/table/ascending.png"
							: "aristo/decoration/table/descending.png")
							: undefined
				};
			}
		},

		"table-header-cell/label" : {
			style : function(states) {
				return {
					minWidth : 0,
					alignY : "middle",
					paddingRight : 5
				};
			}
		},

		"table-header-cell/sort-icon" : {
			style : function(states) {
				return {
					alignY : "middle",
					alignX : "right"
				};
			}
		},

		"table-header-cell/icon" : {
			style : function(states) {
				return {
					minWidth : 0,
					alignY : "middle",
					paddingRight : 5
				};
			}
		},

		"table-editor-textfield" : {
			include : "textfield",

			style : function(states) {
				return {
					decorator : undefined,
					padding : [ 2, 2 ],
					backgroundColor : "background-light"
				};
			}
		},

		"table-editor-selectbox" : {
			include : "selectbox",
			alias : "selectbox",

			style : function(states) {
				return {
					padding : [ 0, 2 ],
					backgroundColor : "background-light"
				};
			}
		},

		"table-editor-combobox" : {
			include : "combobox",
			alias : "combobox",

			style : function(states) {
				return {
					decorator : undefined,
					backgroundColor : "background-light"
				};
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * PROGRESSIVE
		 * ---------------------------------------------------------------------------
		 */

		"progressive-table-header" : {
			alias : "widget",

			style : function(states) {
				return {
					decorator : "progressive-table-header"
				};
			}
		},

		"progressive-table-header-cell" : {
			alias : "atom",
			style : function(states) {
				return {
					minWidth : 40,
					minHeight : 25,
					paddingLeft : 6,
					decorator : "progressive-table-header-cell"
				};
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * APPLICATION
		 * ---------------------------------------------------------------------------
		 */

		"app-header" : {
			style : function(states) {
				return {
					font : "headline",
					textColor : "text-selected",
					backgroundColor : "background-selected-dark",
					padding : [ 8, 12 ]
				};
			}
		},

		"app-header-label" : {
			style : function(states) {
				return {
					paddingTop : 5
				};
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * VIRTUAL WIDGETS
		 * ---------------------------------------------------------------------------
		 */

		"virtual-list" : "list",
		"virtual-list/row-layer" : "row-layer",

		"row-layer" : {
			style : function(states) {
				return {
					colorEven : "white",
					colorOdd : "white"
				};
			}
		},

		"column-layer" : "widget",

		"group-item" : {
			include : "label",
			alias : "label",

			style : function(states) {
				return {
					padding : 4,
					backgroundColor : "#BABABA",
					textColor : "white",
					font : "bold"
				};
			}
		},

		"virtual-selectbox" : "selectbox",
		"virtual-selectbox/dropdown" : "popup",
		"virtual-selectbox/dropdown/list" : {
			alias : "virtual-list"
		},

		"virtual-combobox" : "combobox",
		"virtual-combobox/dropdown" : "popup",
		"virtual-combobox/dropdown/list" : {
			alias : "virtual-list"
		},

		"virtual-tree" : {
			include : "tree",
			alias : "tree",

			style : function(states) {
				return {
					itemHeight : 21
				};
			}
		},

		"virtual-tree-folder" : "tree-folder",
		"virtual-tree-file" : "tree-file",

		"cell" : {
			style : function(states) {
				return {
					textColor : states.selected ? "text-selected"
							: "text-label",
					padding : [ 3, 6 ],
					font : "default"
				};
			}
		},

		"cell-string" : "cell",
		"cell-number" : {
			include : "cell",
			style : function(states) {
				return {
					textAlign : "right"
				};
			}
		},
		"cell-image" : "cell",
		"cell-boolean" : {
			include : "cell",
			style : function(states) {
				return {
					iconTrue : "aristo/decoration/table/boolean-true.png",
					iconFalse : "aristo/decoration/table/boolean-false.png"
				};
			}
		},
		"cell-atom" : "cell",
		"cell-date" : "cell",
		"cell-html" : "cell",

		/*
		 * ---------------------------------------------------------------------------
		 * HTMLAREA
		 * ---------------------------------------------------------------------------
		 */

		"htmlarea" : {
			"include" : "widget",

			style : function(states) {
				return {
					backgroundColor : "white"
				};
			}
		}

	}
});

qx.Mixin.define("aristo.ui.window.MWindow", {

	members : {
		// overridden
		_createChildControlImpl : function(id) {
			var control = null;
			if (id == "pane") {
				control = new qx.ui.container.Composite();
				control.getContentElement().removeStyle("overflowX", true);
				control.getContentElement().removeStyle("overflowY", true);
				this._add(control, {
					flex : 1
				});

			}
			return control || this.base(arguments, id);
		}
	}
});
qx.util.AliasManager.getInstance().add("decoration/table/boolean-true.png", "aristo/decoration/table/boolean-true.png");
qx.util.AliasManager.getInstance().add("decoration/table/boolean-false.png", "aristo/decoration/table/boolean-false.png");
