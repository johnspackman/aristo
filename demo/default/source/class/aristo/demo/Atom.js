qx.Class.define("aristo.demo.Atom",
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
      var layout = new qx.ui.layout.VBox(20);

      this.set({layout: layout, contentPadding: 10});

      var container1 = new qx.ui.container.Composite(new qx.ui.layout.HBox(10));
      container1.add(new qx.ui.basic.Atom("Icon Left", "icon/32/actions/go-previous.png").set({
        backgroundColor : "#E6FAED",
        textColor: "text-active",
        decorator : "main",
        iconPosition : "left",
        padding : 5,
        allowGrowY: false
      }));

      container1.add(new qx.ui.basic.Atom("Icon Top", "icon/32/actions/go-up.png").set({
        backgroundColor : "#E6FAED",
        textColor: "text-active",
        decorator : "main",
        iconPosition : "top",
        padding : 5,
        allowGrowY: false
      }));

      container1.add(new qx.ui.basic.Atom("Icon Right", "icon/32/actions/go-next.png").set({
        backgroundColor : "#E6FAED",
        textColor: "text-active",
        decorator : "main",
        iconPosition : "right",
        padding : 5,
        allowGrowY: false
      }));

      container1.add(new qx.ui.basic.Atom("Icon Bottom", "icon/32/actions/go-down.png").set({
        backgroundColor : "#E6FAED",
        textColor: "text-active",
        decorator : "main",
        iconPosition : "bottom",
        padding : 5,
        allowGrowY: false
      }));

      // Spacer
      container1.add(new qx.ui.core.Spacer().set({width:40}));

      // Show Property
      container1.add(new qx.ui.basic.Atom("Atom Without Label", "icon/32/apps/internet-feed-reader.png").set({
        backgroundColor : "#FAF8E6",
        textColor: "text-active",
        decorator : "main",
        show : "icon",
        padding : 5,
        allowGrowY: false
      }));

      container1.add(new qx.ui.basic.Atom("Atom Without Icon", "icon/32/apps/internet-feed-reader.png").set({
        backgroundColor : "#FAF8E6",
        textColor: "text-active",
        decorator : "main",
        show : "label",
        padding : 5,
        allowGrowY: false
      }));

      // Container of Row #2
      var container2 = new qx.ui.container.Composite(new qx.ui.layout.HBox(10));

      // Shrinking (horizontally)
      container2.add(new qx.ui.basic.Atom("Atom With Long Label").set({
        backgroundColor : "#E6EDFA",
        textColor: "text-active",
        decorator : "main",
        padding : 5,
        width : 100,
        allowGrowY: false
      }));

      container2.add(new qx.ui.basic.Atom("Atom With Long Label", "icon/32/apps/internet-feed-reader.png").set({
        backgroundColor : "#E6EDFA",
        textColor: "text-active",
        decorator : "main",
        padding : 5,
        width : 150,
        allowGrowY: false
      }));

      container2.add(new qx.ui.basic.Atom("Atom With Long Label", "icon/32/apps/internet-feed-reader.png").set({
        backgroundColor : "#EAE6FA",
        textColor: "text-active",
        decorator : "main",
        iconPosition : "top",
        padding : 5,
        width : 100,
        allowGrowY: false
      }));

      // Container of Row #3
      var container3 = new qx.ui.container.Composite(new qx.ui.layout.HBox(10));

      container3.add(new qx.ui.basic.Atom("Wider Atom").set({
        backgroundColor : "#E6EDFA",
        textColor: "text-active",
        decorator : "main",
        center : true,
        padding : 5,
        width : 100,
        allowGrowY: false
      }));

      container3.add(new qx.ui.basic.Atom("Wider Atom", "icon/32/apps/utilities-notes.png").set({
        backgroundColor : "#E6EDFA",
        textColor: "text-active",
        decorator : "main",
        center : true,
        padding : 5,
        width : 140,
        allowGrowY: false
      }));


      container3.add(new qx.ui.basic.Atom("Higher Atom", "icon/32/apps/utilities-notes.png").set({
        backgroundColor : "#E6EDFA",
        textColor: "text-active",
        decorator : "main",
        iconPosition : "top",
        center : true,
        padding : 5,
        height : 100,
        allowGrowY: false
      }));

      this.addListenerOnce("appear", function(e)
    {
        this.add(container1);
        this.add(container2);
        this.add(container3);
    }, this);
    }
  }

});

