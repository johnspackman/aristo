qx.Class.define("aristo.demo.Desktop",
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

      var tabView = this.tabView = new qx.ui.tabview.TabView();

    this.addListenerOnce("appear", function(e)
      {
        this.add(tabView, {edge: 0});
    }, this);

      var page = new qx.ui.tabview.Page("Desktop", "icon/32/actions/go-home.png");
      page.setLayout(new qx.ui.layout.Grow());
      tabView.add(page);

      var windowManager = new qx.ui.window.Manager();

      var desktop = new qx.ui.window.Desktop(windowManager);
      page.add(desktop);

      var winDefs = [
        [300, 200, 30, 50],
        [250, 250, 150, 70],
        [400, 300, 300, 60]
      ];

      for (var i=0; i<winDefs.length; i++)
      {
        var def = winDefs[i];
        var win = new qx.ui.window.Window("Window #" + (i+1)).set({
          width: def[0],
          height: def[1],
          showClose : false,
          showMinimize : false
        });
        win.moveTo(def[2], def[3]);

        desktop.add(win);
        win.open();
      }
    }
  }

});

