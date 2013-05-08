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

/* ************************************************************************

 #asset(aristo/decoration/*)

 ************************************************************************* */

/**
 * The Aristo decoration theme.
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

		"button-hovered" : {
			decorator : [
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

		"button-pressed" : {
			decorator : [
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

		"button-checked" : {
			include : "button-pressed"
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

		"input" : {
			decorator : [ qx.ui.decoration.MBoxShadow ],

			style : {
				color : "border-input",
				backgroundImage : "aristo/decoration/form/input.png",
				backgroundRepeat : "repeat-x",
				backgroundColor : "white"
			}
		},

		"input-invalid": {
			include: "input",
			style : {
				color: "invalid"
			}
		},
		
		"input-shadow": {
			include: "input",
			style : {
				shadowColor: "input-shadow",
				shadowLength: 2,
				shadowBlurRadius: 2
			}
		},

		"input-shadow-invalid": {
			include: "input-shadow",
			style : {
				color: "invalid"
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
				color : "#b8b8b8",
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
				shadowLength: 2,
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
				startColor : "#f5f5f5",
				endColor : "#eaeaea",
				orientation: "horizontal",
				radius : 6,
				width : 0,
				color : "border-main",
				shadowLength: 0,
				shadowBlurRadius: 4,
				shadowColor: "#000"
			}
		},

		"scrollbar-slider-horizontal" : {
			include: "scrollbar-slider-vertical",

			style : {
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
			decorator : qx.ui.decoration.Single,

			style : {
				backgroundImage : "aristo/decoration/toolbar/toolbar-gradient.png",
				backgroundRepeat : "scale",
				color : "border-main",
				widthBottom : 1
			}
		},

		"toolbar-button-hovered" : {
			decorator : qx.ui.decoration.Decorator,

			style : {
				color : "border-main",
				backgroundImage : "aristo/decoration/form/button-disabled-c.png",
				backgroundRepeat : "scale"
			}
		},

		"toolbar-button-checked" : {
			decorator : qx.ui.decoration.Decorator,

			style : {
				color : "border-main",
				backgroundImage : "aristo/decoration/form/button-checked-c.png",
				backgroundRepeat : "scale"
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
			decorator : qx.ui.decoration.Single,

			style : {
				/*
				 * backgroundImage :
				 * "aristo/decoration/menu/background.png",
				 * backgroundRepeat : "scale",
				 */
				backgroundColor : "background-menu",
				width : 1
			/*
			 * width:1 is required or the popup will overlap the
			 * mouse and be immediately closed (as of Qx1.5)
			 */

			/*
			 * width : 1, color : "border-main", style : "solid"
			 */
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
			decorator : [ qx.ui.decoration.MBoxShadow, qx.ui.decoration.MBackground ],

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
				backgroundColor : "background-light"
			}
		},

		/*
		 * ---------------------------------------------------------------------------
		 * TABVIEW
		 * ---------------------------------------------------------------------------
		 */

		"tabview-pane" : {
			decorator : [ qx.ui.decoration.MBorderImage ],

			style : {
				borderImage : "aristo/decoration/tabview/tabview-pane.png" /*,
				insets : [ 4, 6, 7, 4 ] */
			}
		},

		"tabview-page-button-top-active" : {
			decorator : [ qx.ui.decoration.MBorderImage ],

			style : {
				borderImage : "aristo/decoration/tabview/tab-button-top-active.png"
			}
		},

		"tabview-page-button-top-inactive" : {
			decorator : [ qx.ui.decoration.MBorderImage ],

			style : {
				borderImage : "aristo/decoration/tabview/tab-button-top-inactive.png"
			}
		},

		"tabview-page-button-bottom-active" : {
			decorator : [ qx.ui.decoration.MBorderImage ],

			style : {
				borderImage : "aristo/decoration/tabview/tab-button-bottom-active.png"
			}
		},

		"tabview-page-button-bottom-inactive" : {
			decorator : [ qx.ui.decoration.MBorderImage ],

			style : {
				borderImage : "aristo/decoration/tabview/tab-button-bottom-inactive.png"
			}
		},

		"tabview-page-button-left-active" : {
			decorator : [ qx.ui.decoration.MBorderImage ],

			style : {
				borderImage : "aristo/decoration/tabview/tab-button-left-active.png"
			}
		},

		"tabview-page-button-left-inactive" : {
			decorator : [ qx.ui.decoration.MBorderImage ],

			style : {
				borderImage : "aristo/decoration/tabview/tab-button-left-inactive.png"
			}
		},

		"tabview-page-button-right-active" : {
			decorator : [ qx.ui.decoration.MBorderImage ],

			style : {
				borderImage : "aristo/decoration/tabview/tab-button-right-active.png"
			}
		},

		"tabview-page-button-right-inactive" : {
			decorator : [ qx.ui.decoration.MBorderImage ],

			style : {
				borderImage : "aristo/decoration/tabview/tab-button-right-inactive.png"
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
