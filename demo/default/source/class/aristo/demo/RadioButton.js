qx.Class.define("aristo.demo.RadioButton",
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

      var label = new qx.ui.basic.Label("What is your favorite color?");

      // create the main layout
      var mainLayout = new qx.ui.layout.VBox();
      mainLayout.setSpacing(10);

      // add the main layout to a container widget and to the document root
      var container = new qx.ui.container.Composite(mainLayout);
      container.setPadding(20);

    this.addListenerOnce("appear", function(e)
      {
        this.add(container, {left:0,top:0});
    }, this);

      container.add(label);

      // Create some radio buttons
      var rbRed = new qx.ui.form.RadioButton("Red");
      var rbGreen = new qx.ui.form.RadioButton("Green");
      var rbYellow = new qx.ui.form.RadioButton("Yellow");
      var rbBlue = new qx.ui.form.RadioButton("Blue");

      // Add them to the container
      container.add(rbRed);
      container.add(rbGreen);
      container.add(rbYellow);
      container.add(rbBlue);

      // Add all radio buttons to the manager
      var manager = new qx.ui.form.RadioGroup(rbRed, rbGreen, rbYellow, rbBlue);

      // Add a listener to the "changeSelected" event
      manager.addListener("changeSelection", this._onChangeSelection, this);
    },

    /**
     * Reads the label of the selected radio button and
     * raises a alert box with this information in it.
     * @param e {qx.event.type.Data} The incoming data event
     */
    _onChangeSelection : function(e)
    {
      var selectedButton = e.getData()[0];
      var color = selectedButton.getLabel();
      alert("Your favorite color is: " + color);
    }

  }

});

