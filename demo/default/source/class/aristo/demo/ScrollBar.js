qx.Class.define("aristo.demo.ScrollBar",
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
      var layout = new qx.ui.layout.Canvas();
      this.set({layout: layout, contentPadding: 10});

      var container = new qx.ui.container.Composite(new qx.ui.layout.Grid()).set({
        padding: 20
      });

    this.addListenerOnce("appear", function(e)
      {
        this.add(container, {edge: 0});
    }, this);


      var label = new qx.ui.basic.Label("Value: ").set({
        padding: 30
      });
      container.add(label, {row: 0, column: 0});

      function doScroll(e) {
          hScrollBar.setPosition(e.getData());
          hScrollBarNative.setPosition(e.getData());
          vScrollBar.setPosition(e.getData());
          vScrollBarNative.setPosition(e.getData());
          label.setValue("Value " + e.getData());
      }

      var vScrollBar = new qx.ui.core.scroll.ScrollBar("vertical").set({
        height: 200,
        maximum: 500
      });
      vScrollBar.addListener("scroll", doScroll);
      container.add(vScrollBar, {row: 0, column: 1});

      var vScrollBarNative = new qx.ui.core.scroll.NativeScrollBar("vertical").set({
        height: 200,
        maximum: 500
      });
      vScrollBarNative.addListener("scroll", doScroll);
      container.add(vScrollBarNative, {row: 0, column: 2});


      var hScrollBar = new qx.ui.core.scroll.ScrollBar("horizontal").set({
          width: 300,
          maximum: 500
        });
        hScrollBar.addListener("scroll", doScroll);
        container.add(hScrollBar, {row: 1, column: 0});

    var hScrollBarNative = new qx.ui.core.scroll.NativeScrollBar("horizontal").set({
        width: 300,
        maximum: 500
      });
      hScrollBarNative.addListener("scroll", doScroll);
      container.add(hScrollBarNative, {row: 2, column: 0});

      hScrollBar.setPosition(170);
    }
  }

});

