Zepto(function ($) {
  let hide;
  let isEdit = !getUrlVal("isedit");
  console.log(isEdit);
  function handleOver(e) {
    if (!$(e.target).attr("data-sql")) return;
    $(e.target).addClass("edit_active");
  }
  function handleOut(e) {
    if (!$(e.target).attr("data-sql")) return;
    $(e.target).removeClass("edit_active");
  }
  function handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    var sql = $(e.target).attr("data-sql");
    if (!sql) {
      if (hide) hide();
      return;
    }

    switch ($(e.target).attr("data-type") || e.target.tagName) {
      case "IMG":
        console.log("这是图片");
        hide = popup({
          target: e.target,
          text: $(e.target).attr("src"),
          sql: sql,
          type: "img",
          onChange: (value) => {
            if (e.target.tagName == "IMG") {
              $(e.target).attr("src", value);
            } else {
              $(e.target).css("background-image", `url(${value})`);
            }
          },
        });
        break;
      default:
        if ($(e.target).children().length == 0) {
          hide = popup({
            target: e.target,
            text: $(e.target).text(),
            type: "text",
            sql: sql,
            onChange: (value) => {
              $(e.target).text(value);
            },
          });
        } else {
          if (hide) hide();
        }
    }
  }

  function popup({ target, type, text, sql, onChange }) {
    //编辑的元素
    let ref = $(target);
    if (hide) hide();

    let popupNode = $(templates[type]);
    popupNode.width(ref.width());
    popupNode.height(ref.height());
    let position = ref.offset();
    popupNode.css("top", position.top);
    popupNode.css("left", position.left);

    var input = popupNode.find("." + type);
    if (type == "text") {
      input.val(text);
      input.css("font-size", ref.css("font-size"));
    }

    input.on("change", function (e) {
      submitForm(popupNode.find("form"), function (data) {
        if (hide) hide();
        if (onChange) onChange(data);
      });
    });

    popupNode.find(".sql").val(sql);

    $(document.body).append(popupNode);
    let t = input.val();
    input.focus().val(t);
    return function () {
      if (popupNode) popupNode.remove();
    };
  }

  let editButton = $(`<button class="editButton" >编辑</button>`);

  function handleEdit(e) {
    if (isEdit) {
      editButton.text("编辑");
      if (hide) hide();
      $("#content").off("mouseover", handleOver);
      $("#content").off("mouseout", handleOut);
      $("#content").off("click", handleClick);
    } else {
      editButton.text("取消");
      $("#content").on("mouseover", handleOver);
      $("#content").on("mouseout", handleOut);
      $("#content").on("click", handleClick);
    }
    isEdit = !isEdit;
  }
  editButton.on("click", handleEdit);
  handleEdit();
  $(document.body).append(editButton);

  function submitForm(form, callback) {
    var data = new FormData(form[0]);
    $.ajax({
      url: "/nodeedit",
      type: "POST",
      cache: false,
      data: data, //序列化表单，$("form").serialize()只能序列化数据，不能序列化文件
      processData: false,
      contentType: false,
      dataType: "json",
      success: function (result) {
        if (result.code == 0) {
          if (callback) callback(result.data);
        }
      },
    });
  }
});

const imgPopup = /*html*/ `
    <div class="popup">
        <form action="/nodeedit" method="post" onsubmit="return false;" enctype="multipart/form-data" >
            <input type="file" name="img" class="img"  />
            <input  type="hidden" class="sql" name="sql" />
        </form>
    </div>
`;

const textPopup = /*html*/ `
    <div class="popup">
        <form action="/nodeedit" onsubmit="return false;" method="post"  >
            <input type="text" name="text" class="text" />
            <input  type="hidden" class="sql" name="sql" />
        </form>
    </div>
`;
const templates = {
  img: imgPopup,
  text: textPopup,
};

function getUrlVal(para) {
  var search = location.search; //页面URL的查询部分字符串
  var arrPara = new Array(); //参数数组。数组单项为包含参数名和参数值的字符串，如“para=value”
  var arrVal = new Array(); //参数值数组。用于存储查找到的参数值

  if (search != "") {
    var index = 0;
    search = search.substr(1); //去除开头的“?”
    arrPara = search.split("&");

    for (i in arrPara) {
      var paraPre = para + "="; //参数前缀。即参数名+“=”，如“para=”
      if (arrPara[i].indexOf(paraPre) == 0 && paraPre.length < arrPara[i].length) {
        arrVal[index] = decodeURI(arrPara[i].substr(paraPre.length)); //顺带URI解码避免出现乱码
        index++;
      }
    }
  }

  if (arrVal.length == 1) {
    return arrVal[0];
  } else if (arrVal.length == 0) {
    return null;
  } else {
    return arrVal;
  }
}
