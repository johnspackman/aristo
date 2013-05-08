qx.Class.define("aristo.demo.Label",
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
      this.setLayout(new qx.ui.layout.Grow());

      var desktop = this.desktop = new qx.ui.window.Desktop(new qx.ui.window.Manager());

    this.addListenerOnce("appear", function(e)
      {
        this.add(desktop);
    }, this);

      var label1 = new qx.ui.basic.Label("text label").set({
        decorator: "main",
        width: 200
      });
      desktop.add(label1, {left: 20, top: 20});
      this.desktop.add(this.createConfigureButton(label1, "configure text label"), {left: 240, top: 20});

      var label2 = new qx.ui.basic.Label("rich label").set({
        decorator: "main",
        rich: true
      });
      desktop.add(label2, {left: 20, top: 50});
      this.desktop.add(this.createConfigureButton(label2, "configure rich label"), {left: 240, top: 60});

      var label3 = new qx.ui.basic.Label("My First Long Label Cutted").set({
        decorator: "main",
        width: 80
      });
    desktop.add(label3, {left: 20, top: 80});

      var label4 = new qx.ui.basic.Label().set({
        value: "A long label text with auto-wrapping. This also may contain <b style='color:red'>rich HTML</b> markup.",
        decorator: "main",
        rich : true,
        width: 120
      });
    desktop.add(label4, {left: 20, top: 110});

      var label5 = new qx.ui.basic.Label("Big Long Label").set({
        decorator: "main",
        font : new qx.bom.Font(28, ["Verdana", "sans-serif"])
      });
    desktop.add(label5, {left: 20, top: 205});

      var label6 = new qx.ui.basic.Label("Big Long Label Cutted").set({
        decorator: "main",
        font : new qx.bom.Font(28, ["Verdana", "sans-serif"]),
        width : 150
      });
    desktop.add(label6, {left: 20, top: 255});
    },


    createConfigureButton : function(widget, caption)
    {
      var button = new qx.ui.form.Button(caption);

      var win;
      button.addListener("execute", function()
      {
        if (!win) {
          win = this.createEditDialog(widget, caption);
        }
        win.open();
      }, this);

      return button;
    },


    createEditDialog : function(widget, caption)
    {
      var win = new qx.ui.window.Window(caption).set({
        allowMinimize: false,
        showMinimize: false,
        allowMaximize: false,
        showMaximize: false,
    contentPadding: 10
      });
    this.desktop.add(win, {left: 350, top: 20});

      var layout = new qx.ui.layout.Grid(10, 10);
      layout.setColumnFlex(1, 1);
      layout.setColumnAlign(0, "right", "top");
      win.setLayout(layout);

      var controller = new qx.data.controller.Object(widget);

      win.add(new qx.ui.basic.Label("value").set({
        paddingTop: 5
      }), {row: 0, column: 0});
      var textarea = new qx.ui.form.TextArea().set({
        liveUpdate: true
      });
      controller.addTarget(textarea, "value", "value", true);
      win.add(textarea, {row: 0, column: 1});

      win.add(new qx.ui.basic.Label("selectable"), {row: 1, column: 0});
      var buttonSelectable = new qx.ui.form.CheckBox();
      controller.addTarget(buttonSelectable, "value", "selectable", true);
      win.add(buttonSelectable, {row: 1, column: 1});

      win.add(new qx.ui.basic.Label("native context menu"), {row: 2, column: 0});
      var buttonSelectable = new qx.ui.form.CheckBox();
      controller.addTarget(buttonSelectable, "value", "nativeContextMenu", true);
      win.add(buttonSelectable, {row: 2, column: 1});

      win.add(new qx.ui.basic.Label("rich"), {row: 3, column: 0});
      var buttonSelectable = new qx.ui.form.CheckBox().set({
        enabled: false
      });
      controller.addTarget(buttonSelectable, "value", "rich");
      win.add(buttonSelectable, {row: 3, column: 1});

      return win;
    }

  }

});

