(function ($) {

   $.fn.pickList = function (options) {

      var isMobile = false; //initiate as false
      // device detection
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
         || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
         isMobile = true;
      }

      var opts = $.extend({}, $.fn.pickList.defaults, options);

      this.fill = function () {
         var option = '';

         $.each(opts.data, function (key, val) {
            option += '<option data-id=' + val.id + ' data-audiofeatureid=' + val.audioFeatureId + ' >' + val.text + '</option>';
         });

         if (isMobile === true) {
            this.find('.pickDataMoblie').append(option);
         } else {
            this.find('.pickData').append(option);
         }
      };
      this.controll = function () {
         var pickThis = this;

         pickThis.find(".pAdd").on('click', function () {
            var p = pickThis.find(".pickData option:selected");
            p.clone().appendTo(pickThis.find(".pickListResult"));
            p.remove();
         });

         pickThis.find(".pAddAll").on('click', function () {
            var p = pickThis.find(".pickData option");
            p.clone().appendTo(pickThis.find(".pickListResult"));
            p.remove();
         });

         pickThis.find(".pRemove").on('click', function () {
            var p = pickThis.find(".pickListResult option:selected");
            p.clone().appendTo(pickThis.find(".pickData"));
            p.remove();
         });

         pickThis.find(".pRemoveAll").on('click', function () {
            var p = pickThis.find(".pickListResult option");
            p.clone().appendTo(pickThis.find(".pickData"));
            p.remove();
         });

         pickThis.find(".pMoveUp").on('click', function () {
            listbox_move('pickListResult', 'up');
         });

         pickThis.find(".pMoveDown").on('click', function () {
            listbox_move('pickListResult', 'down');
         });

      };

      this.getValues = function (isMobile) {
         var objResult = [];

         if(isMobile){
            var findValue = ".pickDataMoblie option:selected";
         }else{
            var findValue = ".pickListResult option";
         };

         this.find(findValue).each(function () {
            objResult.push({
               id: $(this).data('id'),
               audioFeatureId: $(this).data('audiofeatureid'),
               text: this.text,
            });
         });
         return objResult;
      };


      if (isMobile === true) {
         var pickListHtml =
            "<div class='row'>" +
            "  <div class='col-md-12 col-sm-12'>" +
            "	 <select id='pickDataMoblie' class='form-control pickListSelect pickDataMoblie' multiple></select>" +
            "  </div>" +
            "</div>"+
            "<br>";
      }
      else {
         var pickListHtml =
            "<div class='row'>" +
            "  <div class='col-md-12 col-sm-12'>" +
            "	 <select id='pickData' class='form-control pickListSelect pickData' multiple></select>" +
            "  </div>" +
            "</div>" +
            "<div class='row'>" +
            "  <div class='col-md-12 col-sm-12 pickListButtons'>" +
            "	 <button  class='pAdd btnPickList btn btn-primary btn-sm'>" + opts.add + "</button>" +
            "    <button  class='pAddAll btnPickList btn btn-primary btn-sm'>" + opts.addAll + "</button>" +
            "  </div>" +
            "</div>" +
            "<div class='row'>" +
            "  <div class='col-md-12 col-sm-12 pickListButtons'>" +
            "	 <button  class='pRemove btnPickList btn btn-primary btn-sm'>" + opts.remove + "</button>" +
            "	 <button  class='pRemoveAll btnPickList btn btn-primary btn-sm'>" + opts.removeAll + "</button>" +
            "  </div>" +
            "</div>" +
            "<p style='margin-bottom:0'>--Most suitable--</p>" +
            "<div class='row'>" +
            "   <div class='col-md-10 col-sm-10'>" +
            "      <select id='pickListResult' class='form-control pickListSelect pickListResult' multiple></select>" +
            "   </div>" +
            "   <div class='col-md-2 col-sm-2'>" +
            "      <div class='row'>" +
            "         <button  class='pMoveUp btnPickList btn btn-primary btn-sm'>" +
            "            <span class='icon-circle-up'></span>" +
            "         </button>" +
            "      </div>" +
            "      <div class='row' style='position: absolute;bottom: 0px;'>" +
            "         <button  class='pMoveDown btnPickList btn btn-primary btn-sm'>" +
            "            <span class='icon-circle-down'></span>" +
            "         </button>" +
            "      </div>" +
            "   </div>" +
            "</div>" +
            "<p>--Least suitable--</p>";
      };

      this.init = function () {
         this.append(pickListHtml);
         this.fill();
         this.controll();
      };

      this.init();
      return this;
   };

   $.fn.pickList.defaults = {
      add: 'Add',
      addAll: 'Add All',
      remove: 'Remove',
      removeAll: 'Remove All'
   };

   function listbox_move(listID, direction) {

      var listbox = document.getElementById(listID);
      var selIndex = listbox.selectedIndex;

      if (-1 == selIndex) {
         alert("Please select an option to move.");
         return;
      }

      var increment = -1;
      if (direction == 'up')
         increment = -1;
      else
         increment = 1;

      if ((selIndex + increment) < 0 ||
         (selIndex + increment) > (listbox.options.length - 1)) {
         return;
      }

      var selValue = listbox.options[selIndex].value;
      var selText = listbox.options[selIndex].text;
      listbox.options[selIndex].value = listbox.options[selIndex + increment].value
      listbox.options[selIndex].text = listbox.options[selIndex + increment].text

      listbox.options[selIndex + increment].value = selValue;
      listbox.options[selIndex + increment].text = selText;

      listbox.selectedIndex = selIndex + increment;
   }

}(jQuery));