qx.Class.define("aristo.demo.BrowserWindow",
{
  extend: qx.ui.window.Window,

  construct: function()
  {
    this.base(arguments);

    this.setCaption("Web Browser");
    this._createControls();
  },

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members:
  {
    iframe: null,
    txtUrl: "",

    _createControls: function()
    {
      var layout = new qx.ui.layout.VBox();
//      layout.setSeparator("separator-vertical");
      layout.setSeparator("toolbar-separator");
      this.set({
        layout: layout,
        width: 600,
      minWidth: 600,
      height: 400,
      // allowClose: false,
      contentPadding: [2, 5, 5, 5],
        icon: "icon/16/categories/internet.png"
      });

      var toolbar = this.createToolbar();
      this.iframe = this.createBrowser();

    this.addListenerOnce("appear", function(e)
      {
      this.add(toolbar);
        this.add(this.iframe, { flex : 1 });
    this.center();
    }, this);

    },

  createToolbar: function()
  {
    var toolbar = new qx.ui.toolbar.ToolBar();

    var btnBack = new qx.ui.toolbar.Button(null, "icon/16/actions/go-previous.png");
      btnBack.addListener("execute", function(e) {
        this.iframe.getWindow().history.back();
      }, this);
      toolbar.add(btnBack);

      var btnForward = new qx.ui.toolbar.Button(null, "icon/16/actions/go-next.png");
      btnForward.addListener("execute", function(e) {
        this.iframe.getWindow().history.forward();
      }, this);
      toolbar.add(btnForward);

      // IE does not allow access to an iframes history object
      // Firefox applies history changes to the main window
      // Opera throws a script error when trying to go forward or back

      btnForward.setEnabled(false);
      btnBack.setEnabled(false);

      btnForward.setToolTipText("This feature is currently not supported.")
      btnBack.setToolTipText("This feature is currently not supported.")

      this.txtUrl = new qx.ui.form.TextField().set({
        marginLeft: 1,
        value: "http://qooxdoo.org",
        padding: 2,
        alignY: "middle"
      });
      this.txtUrl.addListener("keypress", function(e) {
        if (e.getKeyIdentifier() == "Enter") {
          this.surfTo(this.txtUrl.getValue());
        }
      }, this);
      toolbar.add(this.txtUrl, {flex: 1});

      var btnGo = new qx.ui.toolbar.Button(null, "icon/16/actions/media-playback-start.png");
      btnGo.addListener("execute", function(e) {
        this.surfTo(this.txtUrl.getValue());
      }, this);
      toolbar.add(btnGo);

    return toolbar;
  },

  createBrowser : function()
    {
      var iframe = new qx.ui.embed.Iframe().set({
        // width: 400,
        // height: 300,
        // minWidth: 200,
        // minHeight: 150,
        source: this.txtUrl.getValue(),
        decorator : "group"
      });

      return iframe;
    },

    surfTo : function(url)
    {
      if (url.indexOf("http://") !== 0) {
        url = "http://" + url;
        this.txtUrl.setValue(url);
      }

      this.iframe.setSource(url);
    }
  }

});

