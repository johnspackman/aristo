qx.Class.define("aristo.demo.TreeVirtual",
{
  extend: qx.ui.groupbox.GroupBox,

  construct: function()
  {
    this.base(arguments);

  qx.Class.include(qx.ui.treevirtual.TreeVirtual,
                     qx.ui.treevirtual.MNode);

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

      var hBox = new qx.ui.layout.HBox();
      hBox.set({spacing: 20});

      var container = new qx.ui.container.Composite(hBox);

    this.addListenerOnce("appear", function(e)
      {
        this.add(container);
    }, this);

      var tree = this.getTree();
      container.add(tree);
    },


    getTree : function()
    {
      var tree = new qx.ui.treevirtual.TreeVirtual("Tree").set({
        width : 300
      });
    tree.setColumnWidth(0, 400);
      tree.setAlwaysShowOpenCloseSymbol(true);

      var dataModel = tree.getDataModel();

      var te1 = dataModel.addBranch(null, "Desktop", true);
      tree.nodeSetLabelStyle(te1, "background-color: navy; color: white;");

      var te;

      dataModel.addBranch(te1, "Files", true);

      te = dataModel.addBranch(te1, "Workspace", true);
      dataModel.addLeaf(te, "Windows (C:)");
      dataModel.addLeaf(te, "Documents (D:)");

      dataModel.addBranch(te1, "Network", true);

      te = dataModel.addBranch(te1, "Trash", true);
      tree.nodeSetCellStyle(te, "background-color: mediumpurple; color: white;");

      var te2 = dataModel.addBranch(null, "Inbox", true);

      te = dataModel.addBranch(te2, "Spam", false);

      for (var i = 1; i < 3000; i++)
      {
        dataModel.addLeaf(te, "Spam Message #" + i);
      }

      dataModel.addBranch(te2, "Sent", true);
      dataModel.addBranch(te2, "Trash", true);
      dataModel.addBranch(te2, "Data", true);
      dataModel.addBranch(te2, "Edit", true);

      dataModel.setData();

      return tree;
    }
  }

});

