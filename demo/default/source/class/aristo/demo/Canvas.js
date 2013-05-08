qx.Class.define("aristo.demo.Canvas",
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

      var label = new qx.ui.basic.Label("Resize the windows to see the effect.");
      desktop.add(label);

      var win1 = this.win1 = new qx.ui.window.Window("Window containing a Canvas - static coordinates").set({
        width: 200,
        height: 200
      });
      win1.setLayout(new qx.ui.layout.Canvas());

      if (qx.core.Environment.get("engine.name") == "mshtml")
      {
        var canvas1 = new qx.ui.container.Composite(new qx.ui.layout.HBox());
        canvas1.add(new qx.ui.basic.Label("Canvas is not support in Internet Explorer!").set({
          rich : true,
          alignX: "center",
          alignY: "middle"
        }));
      }
      else
      {
        var canvas1 = new qx.ui.embed.Canvas().set({
          canvasWidth: 200,
          canvasHeight: 200,
          syncDimension: false
        });
        canvas1.addListener("redraw", this.draw, this);
      }

      win1.add(canvas1, {edge: 0});
      this.desktop.add(win1, {left:20, top:20});

      var win2 = this.win2 = new qx.ui.window.Window("Window containing a Canvas - synced coordinates").set({
        width: 200,
        height: 200
      });
      win2.setLayout(new qx.ui.layout.Canvas());

      if (qx.core.Environment.get("engine.name") == "mshtml")
      {
        var canvas2 = new qx.ui.container.Composite(new qx.ui.layout.HBox());
        canvas2.add(new qx.ui.basic.Label("Canvas is not support in Internet Explorer!").set({
          rich : true,
          alignX: "center",
          alignY: "middle"
        }));
      }
      else
      {
        var canvas2 = new qx.ui.embed.Canvas().set({
          canvasWidth: 200,
          canvasHeight: 200,
          syncDimension: true
        });
        canvas2.addListener("redraw", this.draw, this);
      }

      win2.add(canvas2, {edge: 0});
      this.desktop.add(win2, {left:20, top:250});

    this.addListenerOnce("appear", function(e)
      {
        this.add(this.desktop);
      }, this);

      this.addListener("appear", function(e)
      {
        win1.open();
    win2.open();
      }, this);
    },


    draw : function(e)
    {
      var data = e.getData();
      var ctx = data.context;

      ctx.fillStyle = "rgb(200,0,0)";
      ctx.fillRect (20, 20, 105, 100);

      ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
      ctx.fillRect (70, 70, 105, 100);
    }

  }

});

