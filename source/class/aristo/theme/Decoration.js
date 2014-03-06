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
 * The Aristo decoration theme.
 * @asset(aristo.decoration.*)
 */
qx.Theme.define("aristo.theme.Decoration", {

	decorations : {

		"main" : {
			decorator : qx.ui.decoration.Decorator,

			style : {
				width : 1,
				color : "border-main"
			}
		},

		"border-invalid" : {
			decorator : qx.ui.decoration.Decorator,

			style : {
				width : 2,
				color : "invalid"
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * BUTTON
		 * ---------------------------------------------------------------------------
		 */

		"button" : {
			decorator : [
			    qx.ui.decoration.MBoxShadow,
					qx.ui.decoration.MLinearBackgroundGradient,
					qx.ui.decoration.MBorderRadius,
					qx.ui.decoration.MSingleBorder ],
			style : {
				startColor : "button-gradient-start",
				endColor : "button-gradient-end",
				radius : 2,
				width : 1,
				color : "border-main"
			}
		},

    "button-focused" : {
      include : "button",
      style : {
        shadowColor: "input-shadow",
        shadowLength: 1,
        shadowBlurRadius: 1
      }
    },

		"button-hovered" : {
			decorator : [
					qx.ui.decoration.MBoxShadow,
					qx.ui.decoration.MLinearBackgroundGradient,
					qx.ui.decoration.MBorderRadius,
					qx.ui.decoration.MSingleBorder ],
			style : {
				startColor : "button-active-gradient-start",
				endColor : "button-active-gradient-end",
				radius : 2,
				width : 1,
				color : "border-main"
			}
		},

    "button-hovered-focused" : {
      include : "button-hovered",
      style : {
        shadowColor: "input-shadow",
        shadowLength: 1,
        shadowBlurRadius: 1
      }
    },

		"button-pressed" : {
			decorator : [
					qx.ui.decoration.MBoxShadow, 
					qx.ui.decoration.MLinearBackgroundGradient,
					qx.ui.decoration.MBorderRadius,
					qx.ui.decoration.MSingleBorder ],
			style : {
				startColor : "button-gradient-end",
				endColor : "button-gradient-start",
				radius : 2,
				width : 1,
				color : "border-main"
			}
		},

    "button-pressed-focused" : {
      include : "button-pressed"
    },

    "button-checked" : {
      include : "button-pressed"
    },

    "button-checked-focused" : {
      include : "button-checked",
      style : {
        shadowColor: "input-shadow",
        shadowLength: 1,
        shadowBlurRadius: 2
      }
    },

		"button-disabled" : {
			include : "button"
		},

		/*******************************************************
		 * SHADOW ******************************
		 */

		"shadow" : {
			decorator : [ qx.ui.decoration.MSingleBorder,
					qx.ui.decoration.MBorderRadius,
					qx.ui.decoration.MBoxShadow ],

			style : {
				width : 0,
				color : "button-focused-shadow",
				radius : 2,
				shadowLength : 1,
				shadowBlurRadius : 2,
				shadowColor : "button-focused-shadow"
			}
		},



		/*******************************************************
		 * INPUT
		 ******************************************************/

		"input-base" : {
			decorator : [ qx.ui.decoration.MBoxShadow, qx.ui.decoration.MSingleBorder ],

			style : {
				color : "border-input",
				width: 1,
				backgroundRepeat : "repeat-x",
				backgroundColor : "white"
			}
		},

		"input" : {
			include: "input-base",
			style : {
				backgroundImage : "aristo/decoration/form/input.png"
			}
		},

		"input-invalid": {
			include: "input",
			style : {
				color: "invalid"
			}
		},
    
    "input-readonly": {
      include: "input-base",
      style : {
        backgroundColor : "input-readonly"
      }
    },
    
    "input-disabled": {
      include: "input-base",
      style : {
        backgroundColor : "input-disabled"
      }
    },
		
		"input-shadow": {
			include: "input-base",
			style : {
				backgroundImage : "aristo/decoration/form/input.png",
				shadowColor: "input-shadow",
				shadowLength: 1,
				shadowBlurRadius: 2
			}
		},

		"input-shadow-invalid": {
			include: "input-shadow",
			style : {
				color: "invalid"
			}
		},

		"input-shadow-readonly": {
			include: "input-base",
			style : {
				backgroundColor : "input-readonly",
				shadowColor: "input-shadow",
				shadowLength: 2,
				shadowBlurRadius: 2
			}
		},
		
		"spinner-input" : {
			decorator : [ qx.ui.decoration.MBackgroundColor ],

			style : {
				backgroundColor : "white"
			}
		},

		"list" : {
			decorator : [ qx.ui.decoration.MBoxShadow ],
			style : {
				width : 1,
				color : "input-shadow",
				style : "solid"
			}
		},

		"list-invalid" : {
			include: "list",
			style : {
				color : "invalid"
			}
		},

		"list-shadow" : {
			include: "list",
			style : {
				shadowColor: "border-main",
				shadowLength: 1,
				shadowBlurRadius: 2
			}
		},

		"list-shadow-invalid" : {
			include: "list-shadow",
			style : {
				color : "invalid",
				shadowColor: "invalid"
			}
		},

		"selected" : {
			decorator : qx.ui.decoration.Background,

			style : {
				backgroundColor : "background-item-selected"
			}
		},

		"scrollbar-horizontal" : {
			decorator : [ qx.ui.decoration.MLinearBackgroundGradient ],

			style : {
				startColor: "#afafaf",
				endColor: "#c8c8c8",
				orientation: "horizontal"
			}
		},

		"scrollbar-vertical" : {
			include: "scrollbar-horizontal",

			style : {
				orientation: "horizontal"
			}
		},

		"scroll-bt-up" : {
			decorator : qx.ui.decoration.Background,

			style : {
				backgroundImage : "aristo/decoration/scrollbar/scrollbar-bg-button-t.png"
			}
		},
		
		"scroll-bt-up-focused" : {
			decorator : qx.ui.decoration.Background,

			style : {
				backgroundImage : "aristo/decoration/scrollbar/scrollbar-bg-button-focused-t.png"
			}
		},
		
		"scroll-bt-down" : {
			decorator : qx.ui.decoration.Background,

			style : {
				backgroundImage : "aristo/decoration/scrollbar/scrollbar-bg-button-b.png"
			}
		},

		"scroll-bt-down-focused" : {
			decorator : qx.ui.decoration.Background,

			style : {
				backgroundImage : "aristo/decoration/scrollbar/scrollbar-bg-button-focused-b.png"
			}
		},

		"scroll-bt-left" : {
			decorator : qx.ui.decoration.Background,

			style : {
				backgroundImage : "aristo/decoration/scrollbar/scrollbar-bg-button-l.png"
			}
		},
		
		"scroll-bt-left-focused" : {
			decorator : qx.ui.decoration.Background,

			style : {
				backgroundImage : "aristo/decoration/scrollbar/scrollbar-bg-button-focused-l.png"
			}
		},
		
		"scroll-bt-right" : {
			decorator : qx.ui.decoration.Background,

			style : {
				backgroundImage : "aristo/decoration/scrollbar/scrollbar-bg-button-r.png"
			}
		},

		"scroll-bt-right-focused" : {
			decorator : qx.ui.decoration.Background,

			style : {
				backgroundImage : "aristo/decoration/scrollbar/scrollbar-bg-button-focused-r.png"
			}
		},

		"scrollbar-slider-vertical" : {
			decorator : [	qx.ui.decoration.MLinearBackgroundGradient,
							qx.ui.decoration.MBorderRadius,
							qx.ui.decoration.MSingleBorder,
							qx.ui.decoration.MBoxShadow],
			style : {
				startColor : "#ebebeb",//"#f5f5f5",
				endColor : "#cecece",//"#eaeaea",
				orientation: "horizontal",
				radius : 6,
				width : 0,
				color : "border-main",
				shadowLength: 0,
				shadowBlurRadius: 4,
				shadowColor: "#000"
			}
		},

    "scrollbar-slider-vertical-disabled" : {
      include: "scrollbar-slider-vertical",
      style: {
        startColor: "text-disabled",
        endColor: "text-disabled"
      }
    },
    
		"scrollbar-slider-horizontal" : {
			include: "scrollbar-slider-vertical",

			style : {
				orientation: "vertical"
			}
		},

    "scrollbar-slider-horizontal-disabled" : {
      include: "scrollbar-slider-vertical-disabled",
      style: {
        orientation: "vertical"
      }
    },
    
		/*
		 * --------------------------------------------------------------------------
		 * SLIDER
		 * --------------------------------------------------------------------------
		 */

		"slider-vertical" : {
			decorator : [ qx.ui.decoration.MBackgroundImage ],

			style : {
				backgroundImage : "aristo/decoration/form/slider-vertical-c.png",
				backgroundRepeat: "repeat-y"
			}
		},
		"slider-horizontal" : {
			decorator : [ qx.ui.decoration.MBackgroundImage ],

			style : {
				backgroundImage : "aristo/decoration/form/slider-horizontal-c.png",
				backgroundRepeat: "repeat-x"
			}
		},

		"slider-knob" : {
			decorator : qx.ui.decoration.Background,

			style : {
				backgroundImage : "aristo/decoration/form/radiobutton-checked.png"
			}
		},

		"slider-knob-focused" : {
			decorator : qx.ui.decoration.Background,

			style : {
				backgroundImage : "aristo/decoration/form/radiobutton-checked-focused.png"
			}
		},

		"slider-knob-disabled" : {
			decorator : qx.ui.decoration.Background,

			style : {
				backgroundImage : "aristo/decoration/form/radiobutton-checked-disabled.png"
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * WINDOW
		 * ---------------------------------------------------------------------------
		 */

		"window" : {
			decorator : [ qx.ui.decoration.MSingleBorder,
							qx.ui.decoration.MBorderRadius,
							qx.ui.decoration.MBoxShadow ],

			style : {
				backgroundColor : "white",
				width : 0,
				color : "window-shadow",
				radius : 2,
				shadowLength : 1,
				shadowBlurRadius : 6,
				shadowSpreadRadius: 0,
				shadowColor : "window-shadow"
			}
		},

		"window-active" : {
			include: "window",

			style : {
				shadowLength : 2,
				shadowBlurRadius : 10,
				shadowSpreadRadius: 2
			}
		},
		
		"window-captionbar" : {
			decorator : [ qx.ui.decoration.MLinearBackgroundGradient  ],
			style : {
				startColor : "window-caption-gradient-start",
				endColor : "window-caption-gradient-end"
			}
		},

		"window-captionbar-active" : {
			decorator : [ qx.ui.decoration.MLinearBackgroundGradient  ],
			style : {
				startColor : "window-caption-active-gradient-start",
				endColor : "window-caption-active-gradient-end"
			}
		},

		"window-statusbar" : {
			decorator : qx.ui.decoration.Single,

			style : {
				backgroundColor : "background-light",
				widthTop : 1,
				color : "border-light"
			}
		},

		"table-statusbar" : {
			decorator : qx.ui.decoration.Single,

			style : {
				backgroundColor : "background-light",
				widthTop : 1,
				colorTop : "border-light",
				styleTop : "solid"
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * PROGRESSBAR
		 * ---------------------------------------------------------------------------
		 */

		"progressbar" : {
			decorator : qx.ui.decoration.Single,

			style : {
				backgroundColor : "#FFF",
				width : 1,
				color : "border-separator"
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * TOOLBAR
		 * ---------------------------------------------------------------------------
		 */

		"toolbar" : {
			decorator : qx.ui.decoration.Single,

			style : {
				backgroundColor : "background-light"
			}
		},

		"toolbar-window" : {
			decorator : [ qx.ui.decoration.MLinearBackgroundGradient ],

			style : {
				color : "border-main",
				widthBottom : 1,
				startColor: "#d5d5d5",
				endColor: "#c3c3c3"
			}
		},

		"toolbar-button" : {
			decorator : [ qx.ui.decoration.MSingleBorder, qx.ui.decoration.MBorderRadius, qx.ui.decoration.MLinearBackgroundGradient ],

			style : {
				color : "background-light",
				radius: 2,
				width: 1
			}
		},

		"toolbar-button-hovered" : {
			include: "toolbar-button",

			style : {
				color : "border-main",
				endColor: "#d0d0d0",
				startColor: "#f0f0f0"
			}
		},

		"toolbar-button-checked" : {
			include: "toolbar-button",

			style : {
				startColor: "#d0d0d0",
				endColor: "#f0f0f0"
			}
		},

		"toolbar-separator" : {
			decorator : qx.ui.decoration.Single,

			style : {
				widthLeft : 1,
				widthRight : 1,

				colorLeft : "#b8b8b8",
				colorRight : "#f4f4f4",

				styleLeft : "solid",
				styleRight : "solid"
			}
		},

		"toolbar-part" : {
			decorator : qx.ui.decoration.Background,

			style : {
				backgroundImage : "aristo/decoration/toolbar/toolbar-part.gif",
				backgroundRepeat : "repeat-y"
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * MENU
		 * ---------------------------------------------------------------------------
		 */

		"menu" : {
			decorator : [ qx.ui.decoration.MBoxShadow ],
			style : {
				backgroundColor : "background-menu",
				width : 1,
				color : "input-shadow",
				style : "solid",
				shadowColor: "border-main",
				shadowLength: 2,
				shadowBlurRadius: 2
			}
		},

		"menu-separator" : {
			decorator : qx.ui.decoration.Single,

			style : {
				widthTop : 1,
				colorTop : "#C5C5C5",

				widthBottom : 1,
				colorBottom : "#FAFAFA"
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * MENU BAR
		 * ---------------------------------------------------------------------------
		 */

		"menubar" : {
			decorator : [	qx.ui.decoration.MLinearBackgroundGradient,
							qx.ui.decoration.MSingleBorder ],
			style : {
				startColor : "button-gradient-start",
				endColor : "button-gradient-end",
				width : [ 1, 0 ],
				color : "button-gradient-end"
			}
		},

		"menu-selected" : {
			decorator : qx.ui.decoration.Background,

			style : {
				backgroundColor : "background-dark"
			}
		},

		"blank" : {
			decorator : qx.ui.decoration.Single,

			style : {
				backgroundColor : "white"
			}
		},

		"transparent" : {
			decorator : qx.ui.decoration.Single,

			style : {
				backgroundColor : "transparent"
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * TOOLTIP
		 * ---------------------------------------------------------------------------
		 */

		"tooltip-error" : {
			decorator : [ qx.ui.decoration.MBoxShadow ],

			style : {
				backgroundColor : "#c82c2c",
				//insets : [ 2, 5, 5, 2 ],
				backgroundImage : "aristo/decoration/tooltip/tooltip-error-arrow.png",
				backgroundPositionY : "center",
				backgroundRepeat : "no-repeat"
			}
		},

		/*
		 * ------------------------------------------------------------------------
		 * GROUPBOX
		 * ------------------------------------------------------------------------
		 */
		"group" : {
			decorator : [ qx.ui.decoration.MSingleBorder, qx.ui.decoration.MBorderRadius ],

			style : {
				radius: 4,
				width: 1,
				color: "border-main",
				backgroundColor : "background-application"
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * TABVIEW
		 * ---------------------------------------------------------------------------
		 */

		"tabview-pane" : {
			decorator : [	qx.ui.decoration.MLinearBackgroundGradient,
							qx.ui.decoration.MSingleBorder,
							qx.ui.decoration.MBorderRadius ],

			style : {
				startColor: "background-application",
				endColor: "#efefef",
				startColorPosition: 75,
				radius: 0,
				width: 1,
				color: "tabbutton-active-border"
			}
		},
		"tabview-pane-top": {
			include: "tabview-pane",
			style: {
				radius: [ 0, 0, 4, 4 ]
			}
		},
		"tabview-pane-right": {
			include: "tabview-pane",
			style: {
				radius: [ 4, 0, 0, 4 ]
			}
		},
		"tabview-pane-bottom": {
			include: "tabview-pane",
			style: {
				radius: [ 4, 4, 0, 0 ]
			}
		},
		"tabview-pane-left": {
			include: "tabview-pane",
			style: {
				radius: [ 0, 4, 4, 0 ]
			}
		},

		"tabview-page-button-base-active" : {
			decorator : [	qx.ui.decoration.MLinearBackgroundGradient,
							qx.ui.decoration.MSingleBorder,
							qx.ui.decoration.MBorderRadius ],

			style : {
				startColor: "tabbutton-active-start",
				endColor: "tabbutton-active-end",
				color: "tabbutton-active-border",
				radius: 3,
				width: 1
			}
		},

		"tabview-page-button-base-inactive" : {
			decorator : [	qx.ui.decoration.MLinearBackgroundGradient,
							qx.ui.decoration.MSingleBorder,
							qx.ui.decoration.MBorderRadius ],

			style : {
				startColor: "tabbutton-inactive-start",
				endColor: "tabbutton-inactive-end",
				color: "tabbutton-inactive-border",
				radius: 5,
				width: 1
			}
		},

		"tabview-page-button-top-active" : {
			include: "tabview-page-button-base-active",

			style : {
				radius: [ 3, 3, 0, 0 ],
				width: [ 1, 1, 0, 1 ]
			}
		},

		"tabview-page-button-top-inactive" : {
			include: "tabview-page-button-base-inactive",

			style : {
				radius: [ 5, 5, 0, 0 ]
			}
		},

		"tabview-page-button-bottom-active" : {
			include: "tabview-page-button-base-active",

			style : {
				radius: [ 0, 0, 3, 3 ],
				width: [ 0, 1, 1, 1 ]
			}
		},

		"tabview-page-button-bottom-inactive" : {
			include: "tabview-page-button-base-inactive",

			style : {
				radius: [ 0, 0, 5, 5 ]
			}
		},

		"tabview-page-button-left-active" : {
			include: "tabview-page-button-base-active",
			
			style: {
				radius: [ 3, 0, 0, 3 ],
				width: [ 1, 0, 1, 1 ]
			}
		},

		"tabview-page-button-left-inactive" : {
			include: "tabview-page-button-base-inactive",
			
			style: {
				radius: [ 5, 0, 0, 5 ]
			}
		},

		"tabview-page-button-right-active" : {
			include: "tabview-page-button-base-active",
			
			style: {
				radius: [ 0, 3, 3, 0 ],
				width: [ 1, 1, 1, 0 ]
			}
		},

		"tabview-page-button-right-inactive" : {
			include: "tabview-page-button-base-inactive",
			
			style: {
				radius: [ 0, 5, 5, 0 ]
			}
		},

		"pane" : {
			decorator : [ qx.ui.decoration.MSingleBorder, qx.ui.decoration.MBorderRadius, qx.ui.decoration.MBoxShadow ],

			style : {
				color: "#00204d",
				width: 1,
				radius: 2,
				shadowLength : 1,
				shadowBlurRadius : 6,
				shadowSpreadRadius: 0,
				shadowColor : "window-shadow"
			}
		},


		/*
		 * ---------------------------------------------------------------------------
		 * SPLITPANE
		 * ---------------------------------------------------------------------------
		 */

		"splitpane" : {
			decorator : qx.ui.decoration.Decorator,

			style : {
				backgroundColor : "background-pane",

				width : 3,
				color : "background-splitpane",
				style : "solid"
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * TABLE
		 * ---------------------------------------------------------------------------
		 */

		"table" : {
			decorator : qx.ui.decoration.Single,

			style : {
				width : 1,
				color : "border-main",
				style : "solid"
			}
		},

		"table-scroller-header" : {
			decorator : qx.ui.decoration.Single,

			style : {
				backgroundImage : "aristo/decoration/table/header-cell.png",
				backgroundRepeat : "scale",

				widthBottom : 1,
				colorBottom : "border-main",
				style : "solid"
			}
		},

		"table-header-cell" : {
			decorator : qx.ui.decoration.Single,

			style : {
				widthRight : 1,
				colorRight : "border-separator",
				styleRight : "solid"
			}
		},

		"table-header-cell-hovered" : {
			decorator : qx.ui.decoration.Single,

			style : {
				widthRight : 1,
				colorRight : "border-separator",
				styleRight : "solid",

				widthBottom : 1,
				colorBottom : "white",
				styleBottom : "solid"
			}
		},

		"table-column-button" : {
			decorator : qx.ui.decoration.Single,

			style : {
				backgroundImage : "aristo/decoration/table/header-cell.png",
				backgroundRepeat : "scale",

				widthBottom : 1,
				colorBottom : "border-main",
				style : "solid"
			}
		},

		"table-scroller-focus-indicator" : {
			decorator : qx.ui.decoration.Single,

			style : {
				width : 1,
				color : "table-focus-indicator",
				style : "solid"
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * PROGRESSIVE
		 * ---------------------------------------------------------------------------
		 */

		"progressive-table-header" : {
			decorator : qx.ui.decoration.Single,

			style : {
				width : 1,
				color : "border-main",
				style : "solid"
			}
		},

		"progressive-table-header-cell" : {
			decorator : qx.ui.decoration.Single,

			style : {
				backgroundImage : "aristo/decoration/table/header-cell.png",
				backgroundRepeat : "scale",

				widthRight : 1,
				colorRight : "#F2F2F2",
				style : "solid"
			}
		}

	}
});
