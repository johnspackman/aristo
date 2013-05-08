qx.Class.define("aristo.demo.Image",
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

      var box = new qx.ui.layout.HBox();
      box.setSpacing(20);

      var container = new qx.ui.container.Composite(box);

    this.addListenerOnce("appear", function(e)
      {
        this.add(container, {left:20,top:20});
    }, this);

      container.add(new qx.ui.basic.Image("icon/32/devices/multimedia-player.png"));

      var ileft = new qx.ui.basic.Image("icon/32/actions/format-justify-left.png");
      container.add(ileft);

      var iright = new qx.ui.basic.Image("icon/32/actions/format-justify-right.png");
      container.add(iright);

      var ifill = new qx.ui.basic.Image("icon/32/actions/format-justify-fill.png");
      container.add(ifill);

      var icenter = new qx.ui.basic.Image("icon/32/actions/format-justify-center.png");
      container.add(icenter);

      var big = new qx.ui.basic.Image("icon/32/actions/go-home.png");
      big.setScale(true);
      big.setWidth(64);
      big.setHeight(64);
      container.add(big);

      var external = new qx.ui.basic.Image("http://resources.qooxdoo.org/images/logo.gif");
      container.add(external);

      var externalSmall = new qx.ui.basic.Image("http://resources.qooxdoo.org/images/logo.gif");
      externalSmall.setWidth(136);
      externalSmall.setHeight(40);
      externalSmall.setScale(true);
      container.add(externalSmall);

      // toggle button
      var btn = new qx.ui.form.ToggleButton("Toggle enabled");
      btn.setValue(true);
      btn.addListener("changeValue", function(e) {
        container.setEnabled(e.getData());
      });

      this.add(btn, {left:20, top:180});
    }

  }

});

