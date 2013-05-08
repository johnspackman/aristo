qx.Class.define("aristo.demo.CheckBox",
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
      var layout = new qx.ui.layout.VBox(8);

      this.set({layout: layout, contentPadding: 10});

      var label = new qx.ui.basic.Label("What do you need for the beach?");
      var cbOil = new qx.ui.form.CheckBox("Sun Oil");
      var cbTowel = new qx.ui.form.CheckBox("Towel");
      var cbBeer = new qx.ui.form.CheckBox("Beer");
      var cbBT =  new qx.ui.form.CheckBox("Bathing togs");

      var btOk = new qx.ui.form.Button("OK");
      btOk.addListener("execute", this._onExecute, this);
      btOk.setAllowGrowX(false);

      this._checkBoxes = [ cbOil, cbTowel, cbBeer, cbBT ];

    this.addListenerOnce("appear", function(e)
      {
        this.add(label);
        this.add(cbOil);
        this.add(cbTowel);
        this.add(cbBeer);
        this.add(cbBT);
        this.add(btOk);
    }, this);
    },

  _onExecute : function(e)
    {
      var cbs = this._checkBoxes;
      var count = 0;
      var str = "";

      for (var i=0; i<cbs.length; i++)
      {
        if (cbs[i].getValue())
        {
          count++;
          str += (cbs[i].getLabel()  + ", ");
        }
      }

      if (count > 0)
      {
        str = str.substring(0, str.length-2);
        alert("You need these things for the beach: " + str);
      }
      else
      {
        alert("Are you sure you need nothing for the beach?");
      }
    }

  }

});

