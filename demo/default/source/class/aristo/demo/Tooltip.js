qx.Class.define("aristo.demo.Tooltip",
{
  extend: qx.ui.groupbox.GroupBox,

  construct: function()
  {
    this.base(arguments);

    this._createControls();
  },

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members:
  {
  _createControls: function()
    {
      var layout = new qx.ui.layout.Grid(10, 10);
      this.set({layout: layout});

    this.addListenerOnce("appear", function(e)
      {
        this.createSharedToolTip();
        this.createIconToolTip();
        this.createToolTip();
        this.createShortTimeoutToolTip();
        this.createRichToolTip();
        this.createToolTipText();
        this.createToolTipIcon();
        this.createToolTipTextIcon();
    }, this);
    },


    __columns : 4,
    __index : 0,

  addWidget : function(widget)
    {
      this.add(widget, {
        row: Math.floor(this.__index / this.__columns),
        column : this.__index % this.__columns
      });
      this.__index += 1;
    },


    createSharedToolTip : function()
    {
      var tooltip = new qx.ui.tooltip.ToolTip("Shared ToolTip");
      tooltip.addListener("appear", function(e)
      {
        var label = "Shared tool tip of button #";
        if (this.getOpener() == button1) {
          label += "1";
        } else {
          label += "2";
        }
        tooltip.setLabel(label);
      });

      var button1 = new qx.ui.form.Button("Button #1 (Shared ToolTip)");
      button1.setToolTip(tooltip);
      this.addWidget(button1);

      var button2 = new qx.ui.form.Button("Button #2 (Shared ToolTip)");
      button2.setToolTip(tooltip);
      this.addWidget(button2);
    },


    createIconToolTip : function()
    {
      var button = new qx.ui.form.Button("Icon only ToolTip").set({
        toolTip: new qx.ui.tooltip.ToolTip(null, "icon/16/actions/help-about.png")
      });
      this.addWidget(button);
    },


    createToolTip : function()
    {
      var button = new qx.ui.form.Button("ToolTip with icon and label").set({
        toolTip: new qx.ui.tooltip.ToolTip(
          "Hello World #3", "icon/16/actions/help-about.png"
        )
      })
      this.addWidget(button);
    },


    createShortTimeoutToolTip : function()
    {
      var tooltip = new qx.ui.tooltip.ToolTip(
        "Such a great tooltip with a (show) timeout of 50ms.",
        "icon/32/actions/help-about.png"
      );
      tooltip.setShowTimeout(50);

      var button = new qx.ui.form.Button("Short timeout ToolTip");
      this.addWidget(button);
      button.setToolTip(tooltip);
    },


    createRichToolTip : function()
    {
      var tooltip = new qx.ui.tooltip.ToolTip(
        "A long label text with auto-wrapping. " +
          "This also may contain <b style='color:red'>rich HTML</b> markup " +
          "and with a (show) timeout of 50ms.",
        "icon/32/actions/help-about.png");

      tooltip.setWidth(200);
      tooltip.setRich(true);
      tooltip.setShowTimeout(50);

      var button = new qx.ui.form.Button("ToolTip with icon and rich text");
      this.addWidget(button);
      button.setToolTip(tooltip);
    },

    createToolTipText : function()
    {
      var button = new qx.ui.form.Button("Button with ToolTipText").set({
        toolTipText : "Tooltip text"
      });
      this.addWidget(button);
    },

    createToolTipIcon : function()
    {
      var button = new qx.ui.form.Button("Button with ToolTipIcon").set({
        toolTipIcon : "icon/16/actions/help-about.png"
      });
      this.addWidget(button);
    },

    createToolTipTextIcon : function()
    {
      var button = new qx.ui.form.Button("Button with ToolTipText and ToolTipIcon").set({
        toolTipText : "Tooltip text",
        toolTipIcon : "icon/16/actions/help-about.png"
      });
      this.addWidget(button);
    }
  },

  /*
   *****************************************************************************
      DESTRUCT
   *****************************************************************************
   */

  destruct : function()
  {
    // this._disposeObjects("container");
  }

});

