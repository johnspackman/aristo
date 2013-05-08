qx.Class.define("aristo.demo.SlideBar",
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

      var slideBar = new qx.ui.container.SlideBar();
      slideBar.set({
        width: 300
      });

      slideBar.setLayout(new qx.ui.layout.HBox(3));

      var icons = [
        "audio-card.png","audio-input-microphone.png","battery.png",
        "camera-photo.png","camera-web.png","computer.png","display.png",
        "drive-harddisk.png","drive-optical.png","input-keyboard.png",
        "network-wired.png","network-wireless.png"
      ];

      for (var i=0; i<icons.length; i++)
      {
        slideBar.add((new qx.ui.basic.Image("icon/48/devices/" + icons[i])).set({
          decorator: "main",
          padding: 4
        }));
      }

      var toggle = new qx.ui.form.ToggleButton("Toggle size");

      toggle.addListener("changeValue", function(e) {
        slideBar.setWidth(e.getData() ? 800 : 300);
      });

    this.addListenerOnce("appear", function(e)
      {
        this.add(toggle, {left:20, top:100});
        this.add(slideBar, {left:20, top:20});
    }, this);
    }

  }

});

