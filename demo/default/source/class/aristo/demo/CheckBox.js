/*
@ignore(alert)
 */
qx.Class.define("aristo.demo.CheckBox", {
  extend: qx.ui.groupbox.GroupBox,

  construct: function() {
    this.base(arguments);

    this._createControls();
  },

  /*
   * ****************************************************************************
   * MEMBERS
   * ****************************************************************************
   */

  members: {
    _createControls: function() {
      var layout = new qx.ui.layout.VBox(8);

      this.set({
        layout: layout,
        contentPadding: 10
      });

      var label = new qx.ui.basic.Label("What do you need for the beach?");
      
      this._checkBoxes = [];
      var compOuter = new qx.ui.container.Composite(new qx.ui.layout.HBox(30));
      
      var t = this;
      function add(valid, enabled) {
        var cbOil = new qx.ui.form.CheckBox("Sun Oil");
        var cbTowel = new qx.ui.form.CheckBox("Towel");
        var cbBeer = new qx.ui.form.CheckBox("Beer");

        cbOil.set({ value: true, valid: !!valid, enabled: !!enabled });
        cbTowel.set({ triState: true, value: null, valid: !!valid, enabled: !!enabled });
        cbBeer.set({ triState: true, value: false, valid: !!valid, enabled: !!enabled });
        
        var comp = new qx.ui.container.Composite(new qx.ui.layout.VBox(2));
        comp.add(new qx.ui.basic.Label((valid ? "Valid" : "Invalid") + " " + (enabled ? "Enabled" : "Disabled")));
        comp.add(cbOil);
        comp.add(cbTowel);
        comp.add(cbBeer);
        compOuter.add(comp);
        t._checkBoxes.push(cbOil);
        t._checkBoxes.push(cbTowel);
        t._checkBoxes.push(cbBeer);
      }
      add(true, true);
      add(false, true);
      add(true, false);
      add(false, false);

      var btOk = new qx.ui.form.Button("OK");
      btOk.addListener("execute", this._onExecute, this);
      btOk.setAllowGrowX(false);


      this.addListenerOnce("appear", function(e) {
        this.add(label);
        this.add(compOuter);
        this.add(btOk);
      }, this);
    },

    _onExecute: function(e) {
      var cbs = this._checkBoxes;
      var count = 0;
      var str = "";

      for ( var i = 0; i < cbs.length; i++) {
        if (cbs[i].getValue()) {
          count++;
          str += (cbs[i].getLabel() + ", ");
        }
      }

      if (count > 0) {
        str = str.substring(0, str.length - 2);
        alert("You need these things for the beach: " + str);
      } else {
        alert("Are you sure you need nothing for the beach?");
      }
    }

  }

});
