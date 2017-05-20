import Ember from 'ember'

export default Ember.Controller.extend({
  options: {
    theme: "snow",
    modules: {
      imageResize: {},
      imageDrop: true,
      toolbar: [
        [{header: [2, 3, 4, false]}],
        ["bold", "italic", "underline", "strike"],
        [{"color": []}],
        [{"list": "ordered"}, {"list": "bullet"}],
        [{"indent": "-1"}, {"indent": "+1"}],
        [{"align": []}],
        ["link", "image"],
        ["clean"]
      ]
    }
  },

  updateText(editor) {
    // this.attrs.update(editor.root.innerHTML);
    this.set('value', editor.root.innerHTML)
  }
});
