qx.Class.define("aristo.demo.StackContainer",
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

    this.addListenerOnce("appear", function(e)
      {
        this.addSimpleStack();
        this.addDynamicStack();
    }, this);
    },


    addSimpleStack : function()
    {
      var container = new qx.ui.container.Stack();
      container.setDecorator("main");
      container.setWidth(200);
      container.setHeight(120);
      this.add(container, {left:20, top:20});

      var box = new qx.ui.container.Composite((new qx.ui.layout.HBox).set({spacing:4}));
      var prev = new qx.ui.form.Button("Previous", "icon/22/actions/go-previous.png");
      var next = new qx.ui.form.Button("Next", "icon/22/actions/go-next.png");
      box.add(prev);
      box.add(next);
      this.add(box, {left:20, top: 150});

      prev.addListener("execute", container.previous, container);
      next.addListener("execute", container.next, container);

      var colors = [ "red", "gray", "blue", "orange", "teal", "yellow", "green" ];
      var widget;

      for (var i=0; i<colors.length; i++)
      {
        widget = new qx.ui.core.Widget;
        widget.setBackgroundColor(colors[i]);

        container.add(widget);
      }

      container.addListener("changeSelection", function(e) {
        this.debug("Selected: " + e.getData()[0].getBackgroundColor());
      });
    },

    addDynamicStack : function()
    {
      var container = new qx.ui.container.Stack();
      container.setDecorator("main");
      container.setDynamic(true);
      this.add(container, {left:250, top:20});

      var box = new qx.ui.container.Composite((new qx.ui.layout.HBox).set({spacing:4}));
      var prev = new qx.ui.form.Button("Previous", "icon/22/actions/go-previous.png");
      var next = new qx.ui.form.Button("Next", "icon/22/actions/go-next.png");
      box.add(prev);
      box.add(next);
      this.add(box, {left:250, top: 150});

      prev.addListener("execute", container.previous, container);
      next.addListener("execute", container.next, container);

      var colors = [ "red", "gray", "blue", "orange", "teal", "yellow", "green" ];
      var widget;

      for (var i=0; i<colors.length; i++)
      {
        widget = new qx.ui.core.Widget;
        widget.setBackgroundColor(colors[i]);
        widget.setWidth((Math.round(i/2)+1)*50);
        widget.setHeight((Math.round(i/3)+1)*40);

        container.add(widget);
      }

      container.addListener("changeSelection", function(e)
      {
        var selected = e.getData()[0];
        this.debug("Selected: " + selected.getBackgroundColor() + " (" + selected.getWidth() + "x" + selected.getHeight() + ")");
      });

      container.addListener("resize", function(e)
      {
        var bounds = this.getBounds();
        this.debug("Resize to: " + bounds.width + "x" + bounds.height);
      });
    }

  }
});

