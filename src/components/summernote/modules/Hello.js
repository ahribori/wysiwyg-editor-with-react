
export const HelloButton = ($summernote, $) => context => {
  // const summernote = $.summernote;
  const button = $.summernote.ui.button({
    contents: '<i class="fa fa-child"/> Hello',
    tooltip: "hello",
    click: function() {
      $summernote.summernote(
        "pasteHTML",
        "<img  src='https://t1.kakaocdn.net/kakaohairshop/assets/images/promotion/m640/191112_greathair/img_greathair_tab.png'/>"
      );
    }
  });
  return button.render();
};
