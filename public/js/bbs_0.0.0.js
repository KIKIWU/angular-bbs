/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-9
 * Time: 下午9:59
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsCtrl',['bbsCtrlWelcome','bbsCtrlPost','bbsCtrlTeam','bbsCtrlUser']);;/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-13
 * Time: 下午10:05
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsCtrlPost',['ngRoute','bbsServiceRESTful']);
angular.module('bbsCtrlPost').config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
        templateUrl : 'tpl/post.html',
        controller : 'homePostListCtrl'
    });
}]);
;/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-13
 * Time: 下午11:39
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsCtrlPost').controller('homePostListCtrl',['rfPost','$scope',function(rfPost,$scope){
    rfPost.list(function(data){
        $scope.postList = data.result;
    });
}]);;angular.module('bbsCtrlPost').controller('pubPostCtrl',['$scope',function($scope){
    $scope.fileUploadList = [];

    $scope.removeFileUpload = function(index){
        $scope.fileUploadList.splice(index,1);
    }

    $('#upload-file').uploadify({
        swf : '/resource/uploadify.swf',
        uploader : '/upload',
        multi : false,
        buttonClass : 'btn btn-default',
        width : 100,
        height : 33,
        buttonText : '上传附件',
        onUploadSuccess : function(file, data, response){
            $scope.$apply(function(){
                $scope.fileUploadList.push({name : 'dddd'});
            });
        }
    });
}]);;/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-13
 * Time: 下午10:05
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsCtrlTeam',['ngRoute','bbsServiceRESTful']);
angular.module('bbsCtrlTeam').config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/team',{
        templateUrl : 'tpl/team.html',
        controller : 'homeTeamListCtrl'
    });
}]);
;/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-13
 * Time: 下午11:39
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsCtrlTeam').controller('homeTeamListCtrl',['rfTeam','$scope',function(rfTeam,$scope){
    rfTeam.list(function(data){
        $scope.teamList = data.result;
    });
}]);;/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-13
 * Time: 下午10:05
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsCtrlUser',['ngRoute','bbsServiceRESTful']);
angular.module('bbsCtrlUser').config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/userList',{
        templateUrl : 'tpl/userList.html',
        controller : 'homeUserListCtrl'
    }).when('/userEdit',{
        templateUrl : 'tpl/userEdit.html',
        controller : 'userEditCtrl'
    }).when('/userInfo',{
        templateUrl : 'tpl/userInfo.html',
        controller : 'userInfoCtrl'
    });
}]);
;/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-13
 * Time: 下午11:39
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsCtrlUser').controller('homeUserListCtrl',['rfUser','$scope',function(rfUser,$scope){
    rfUser.list(function(data){
        $scope.userList = data.result;
    });
}]);;angular.module('bbsCtrlUser').controller('userEditCtrl',['$scope',function($scope){
    $scope.userInfo = {
        name: '刘顺顺',
        nickName: 'liuss',
        sex: 'woman',
        age: 18,
        hobby: [1,3,4],
        allHobbies : [{value : '运动',id : 1},{value : '阅读',id : 2},{value : '看电视',id : 3},{value : '旅游',id : 4}],
        email : 'liuss@visionet.com.cn',
        homePage : 'http://liuss.com',
        introduction : '我是一个程序员',
        education: 2,
        allEducations : [{value : '小学',id : 1},{value : '初中',id : 2},{value : '高中',id : 3},{value : '本科',id : 4},{value : '本科以上',id : 5}],
        birthday : '09-09',
        allColors : [{value : '黑色',id : 1},{value : '黄色',id : 2},{value : '白色',id : 3},{value : '蓝色',id : 4}],
        skinColor : 4,
        allProfessions : [{value : '医生',id : 1},{value : '老师',id : 2},{value : '工人',id : 3},{value : '司机',id : 4},{value : '厨师',id : 5},{value : '演员',id : 6}],
        profession : [1,4,3],
        allProvinces : [{value : '请选择'},{value : '上海', id : 2},{value : '北京', id : 3},{value : '河南', id : 4},{value : '江西', id : 5},{value : '四川', id : 6}],
        province : 4
    };
}]);;angular.module('bbsCtrlUser').controller('userInfoCtrl',['$scope',function($scope){
    $scope.userInfo = {
        name: '刘顺顺',
        nickName: 'liuss',
        sex: 'woman',
        age: 18,
        hobby: [1,2],
        allHobbies : [{value : '运动',id : 1},{value : '阅读',id : 2},{value : '看电视',id : 3},{value : '旅游',id : 4}],
        email : 'liuss@visionet.com.cn',
        homePage : 'http://liuss.com',
        introduction : '我是一个程序员',
        education: 2,
        allEducations : [{value : '小学',id : 1},{value : '初中',id : 2},{value : '高中',id : 3},{value : '本科',id : 4},{value : '本科以上',id : 5}],
        birthday : '09-09',
        allColors : [{value : '黑色',id : 1},{value : '黄色',id : 2},{value : '白色',id : 3},{value : '蓝色',id : 4}],
        skinColor : 4,
        allProfessions : [{value : '医生',id : 1},{value : '老师',id : 2},{value : '工人',id : 3},{value : '司机',id : 4},{value : '厨师',id : 5},{value : '演员',id : 6}],
        profession : [1,4,3],
        allProvinces : [{value : '请选择'},{value : '上海', id : 2},{value : '北京', id : 3},{value : '河南', id : 4},{value : '江西', id : 5},{value : '四川', id : 6}],
        province : 4
    };
}]);;/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-9
 * Time: 下午9:55
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsCtrlWelcome',[]);;/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-9
 * Time: 下午9:49
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsCtrlWelcome')
    .controller('welcomeLoginCtrl',
        ['$scope','$http',function($scope,$http){
    $scope.login = function(){
        $scope.runValidate = true;
        if($scope.loginForm.$valid){
            $http.post('login_in',
               {
                   name : $scope.name,
                   pwd : $scope.pwd
               },
               {responseType : 'json'}
            ).success(function(data){
                if(data.code != 1000){
                    $scope.loginSign = '用户名或密码错误!';
                }else{
                    window.location.href = '/home';
                }
            });
        }

    };

}]);;/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-17
 * Time: 下午9:28
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsDire',['bbsFilter']);
;!function($, wysi) {
    "use strict";

    var tpl = {
        "font-styles": function(locale, options) {
            var size = (options && options.size) ? ' btn-'+options.size : '';
            return "<li class='dropdown'>" +
                "<a class='btn dropdown-toggle" + size + "' data-toggle='dropdown' href='#'>" +
                "<i class='icon-font'></i>&nbsp;<span class='current-font'>" + locale.font_styles.normal + "</span>&nbsp;<b class='caret'></b>" +
                "</a>" +
                "<ul class='dropdown-menu'>" +
                "<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='div' tabindex='-1'>" + locale.font_styles.normal + "</a></li>" +
                "<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h1' tabindex='-1'>" + locale.font_styles.h1 + "</a></li>" +
                "<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h2' tabindex='-1'>" + locale.font_styles.h2 + "</a></li>" +
                "<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h3' tabindex='-1'>" + locale.font_styles.h3 + "</a></li>" +
                "<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h4'>" + locale.font_styles.h4 + "</a></li>" +
                "<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h5'>" + locale.font_styles.h5 + "</a></li>" +
                "<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h6'>" + locale.font_styles.h6 + "</a></li>" +
                "</ul>" +
                "</li>";
        },

        "emphasis": function(locale, options) {
            var size = (options && options.size) ? ' btn-'+options.size : '';
            return "<li>" +
                "<div class='btn-group'>" +
                "<a class='btn" + size + "' data-wysihtml5-command='bold' title='CTRL+B' tabindex='-1'>" + locale.emphasis.bold + "</a>" +
                "<a class='btn" + size + "' data-wysihtml5-command='italic' title='CTRL+I' tabindex='-1'>" + locale.emphasis.italic + "</a>" +
                "<a class='btn" + size + "' data-wysihtml5-command='underline' title='CTRL+U' tabindex='-1'>" + locale.emphasis.underline + "</a>" +
                "</div>" +
                "</li>";
        },

        "lists": function(locale, options) {
            var size = (options && options.size) ? ' btn-'+options.size : '';
            return "<li>" +
                "<div class='btn-group'>" +
                "<a class='btn" + size + "' data-wysihtml5-command='insertUnorderedList' title='" + locale.lists.unordered + "' tabindex='-1'><i class='glyphicon glyphicon-list'></i></a>" +
                "<a class='btn" + size + "' data-wysihtml5-command='insertOrderedList' title='" + locale.lists.ordered + "' tabindex='-1'><i class='glyphicon glyphicon-th-list'></i></a>" +
                "<a class='btn" + size + "' data-wysihtml5-command='Outdent' title='" + locale.lists.outdent + "' tabindex='-1'><i class='glyphicon glyphicon-indent-right'></i></a>" +
                "<a class='btn" + size + "' data-wysihtml5-command='Indent' title='" + locale.lists.indent + "' tabindex='-1'><i class='glyphicon glyphicon-indent-left'></i></a>" +
                "</div>" +
                "</li>";
        },

        "link": function(locale, options) {
            var size = (options && options.size) ? ' btn-'+options.size : '';
            return "<li>" +
                "<div class='bootstrap-wysihtml5-insert-link-modal modal fade' style='display: none;'>" +
                "<div class='modal-dialog'>" +
                "<div class='modal-content'>" +
                "<div class='modal-header'>" +
                "<a class='close' data-dismiss='modal'>&times;</a>" +
                "<h3>" + locale.link.insert + "</h3>" +
                "</div>" +
                "<div class='modal-body'>" +
                "<input value='http://' class='bootstrap-wysihtml5-insert-link-url form-control'>" +
                "<label class='checkbox'> <input type='checkbox' class='bootstrap-wysihtml5-insert-link-target' checked>" + locale.link.target + "</label>" +
                "</div>" +
                "<div class='modal-footer'>" +
                "<a href='#' class='btn' data-dismiss='modal'>" + locale.link.cancel + "</a>" +
                "<a href='#' class='btn btn-primary' data-dismiss='modal'>" + locale.link.insert + "</a>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "<a class='btn" + size + "' data-wysihtml5-command='createLink' title='" + locale.link.insert + "' tabindex='-1'><i class='glyphicon glyphicon-link'></i></a>" +
                "</li>";
        },

        "image": function(locale, options) {
            var size = (options && options.size) ? ' btn-'+options.size : '';
            return "<li>" +
                "<a id='richTextImage' class='btn" + size + "' data-wysihtml5-command='insertImage' title='" + locale.image.insert + "' tabindex='-1'></a>" +
                "</li>";
        },

        "html": function(locale, options) {
            var size = (options && options.size) ? ' btn-'+options.size : '';
            return "<li>" +
                "<div class='btn-group'>" +
                "<a class='btn" + size + "' data-wysihtml5-action='change_view' title='" + locale.html.edit + "' tabindex='-1'><i class='icon-pencil'></i></a>" +
                "</div>" +
                "</li>";
        },

        "color": function(locale, options) {
            var size = (options && options.size) ? ' btn-'+options.size : '';
            return "<li class='dropdown'>" +
                "<a class='btn dropdown-toggle" + size + "' data-toggle='dropdown' href='#' tabindex='-1'>" +
                "<span class='current-color'>" + locale.colours.black + "</span>&nbsp;<b class='caret'></b>" +
                "</a>" +
                "<ul class='dropdown-menu'>" +
                "<li><div class='wysihtml5-colors' data-wysihtml5-command-value='black'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='black'>" + locale.colours.black + "</a></li>" +
                "<li><div class='wysihtml5-colors' data-wysihtml5-command-value='silver'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='silver'>" + locale.colours.silver + "</a></li>" +
                "<li><div class='wysihtml5-colors' data-wysihtml5-command-value='gray'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='gray'>" + locale.colours.gray + "</a></li>" +
                "<li><div class='wysihtml5-colors' data-wysihtml5-command-value='maroon'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='maroon'>" + locale.colours.maroon + "</a></li>" +
                "<li><div class='wysihtml5-colors' data-wysihtml5-command-value='red'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='red'>" + locale.colours.red + "</a></li>" +
                "<li><div class='wysihtml5-colors' data-wysihtml5-command-value='purple'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='purple'>" + locale.colours.purple + "</a></li>" +
                "<li><div class='wysihtml5-colors' data-wysihtml5-command-value='green'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='green'>" + locale.colours.green + "</a></li>" +
                "<li><div class='wysihtml5-colors' data-wysihtml5-command-value='olive'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='olive'>" + locale.colours.olive + "</a></li>" +
                "<li><div class='wysihtml5-colors' data-wysihtml5-command-value='navy'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='navy'>" + locale.colours.navy + "</a></li>" +
                "<li><div class='wysihtml5-colors' data-wysihtml5-command-value='blue'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='blue'>" + locale.colours.blue + "</a></li>" +
                "<li><div class='wysihtml5-colors' data-wysihtml5-command-value='orange'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='orange'>" + locale.colours.orange + "</a></li>" +
                "</ul>" +
                "</li>";
        }
    };

    var templates = function(key, locale, options) {
        return tpl[key](locale, options);
    };


    var Wysihtml5 = function(el, options) {
        this.el = el;
        var toolbarOpts = options || defaultOptions;
        for(var t in toolbarOpts.customTemplates) {
            tpl[t] = toolbarOpts.customTemplates[t];
        }
        this.toolbar = this.createToolbar(el, toolbarOpts);
        this.editor =  this.createEditor(options);

        window.editor = this.editor;

        $('iframe.wysihtml5-sandbox').each(function(i, el){
            $(el.contentWindow).off('focus.wysihtml5').on({
                'focus.wysihtml5' : function(){
                    $('li.dropdown').removeClass('open');
                }
            });
        });
    };

    Wysihtml5.prototype = {

        constructor: Wysihtml5,

        createEditor: function(options) {
            options = options || {};

            // Add the toolbar to a clone of the options object so multiple instances
            // of the WYISYWG don't break because "toolbar" is already defined
            options = $.extend(true, {}, options);
            options.toolbar = this.toolbar[0];

            var editor = new wysi.Editor(this.el[0], options);

            if(options && options.events) {
                for(var eventName in options.events) {
                    editor.on(eventName, options.events[eventName]);
                }
            }
            return editor;
        },

        createToolbar: function(el, options) {
            var self = this;
            var toolbar = $("<ul/>", {
                'class' : "wysihtml5-toolbar",
                'style': "display:none"
            });
            var culture = options.locale || defaultOptions.locale || "en";
            for(var key in defaultOptions) {
                var value = false;

                if(options[key] !== undefined) {
                    if(options[key] === true) {
                        value = true;
                    }
                } else {
                    value = defaultOptions[key];
                }

                if(value === true) {
                    toolbar.append(templates(key, locale[culture], options));

                    if(key === "html") {
                        this.initHtml(toolbar);
                    }

                    if(key === "link") {
                        this.initInsertLink(toolbar);
                    }

                    if(key === "image") {
                        this.initInsertImage(toolbar);
                    }
                }
            }

            if(options.toolbar) {
                for(key in options.toolbar) {
                    toolbar.append(options.toolbar[key]);
                }
            }

            toolbar.find("a[data-wysihtml5-command='formatBlock']").click(function(e) {
                var target = e.target || e.srcElement;
                var el = $(target);
                self.toolbar.find('.current-font').text(el.html());
            });

            toolbar.find("a[data-wysihtml5-command='foreColor']").click(function(e) {
                var target = e.target || e.srcElement;
                var el = $(target);
                self.toolbar.find('.current-color').text(el.html());
            });

            this.el.before(toolbar);

            return toolbar;
        },

        initHtml: function(toolbar) {
            var changeViewSelector = "a[data-wysihtml5-action='change_view']";
            toolbar.find(changeViewSelector).click(function(e) {
                toolbar.find('a.btn').not(changeViewSelector).toggleClass('disabled');
            });
        },

        initInsertImage: function(toolbar) {

        },

        initInsertLink: function(toolbar) {
            var self = this;
            var insertLinkModal = toolbar.find('.bootstrap-wysihtml5-insert-link-modal');
            var urlInput = insertLinkModal.find('.bootstrap-wysihtml5-insert-link-url');
            var targetInput = insertLinkModal.find('.bootstrap-wysihtml5-insert-link-target');
            var insertButton = insertLinkModal.find('a.btn-primary');
            var initialValue = urlInput.val();
            var caretBookmark;

            var insertLink = function() {
                var url = urlInput.val();
                urlInput.val(initialValue);
                self.editor.currentView.element.focus();
                if (caretBookmark) {
                    self.editor.composer.selection.setBookmark(caretBookmark);
                    caretBookmark = null;
                }

                var newWindow = targetInput.prop("checked");
                self.editor.composer.commands.exec("createLink", {
                    'href' : url,
                    'target' : (newWindow ? '_blank' : '_self'),
                    'rel' : (newWindow ? 'nofollow' : '')
                });
            };
            var pressedEnter = false;

            urlInput.keypress(function(e) {
                if(e.which == 13) {
                    insertLink();
                    insertLinkModal.modal('hide');
                }
            });

            insertButton.click(insertLink);

            insertLinkModal.on('shown', function() {
                urlInput.focus();
            });

            insertLinkModal.on('hide', function() {
                self.editor.currentView.element.focus();
            });

            toolbar.find('a[data-wysihtml5-command=createLink]').click(function() {
                var activeButton = $(this).hasClass("wysihtml5-command-active");

                if (!activeButton) {
                    self.editor.currentView.element.focus(false);
                    caretBookmark = self.editor.composer.selection.getBookmark();
                    insertLinkModal.appendTo('body').modal('show');
                    insertLinkModal.on('click.dismiss.modal', '[data-dismiss="modal"]', function(e) {
                        e.stopPropagation();
                    });
                    return false;
                }
                else {
                    return true;
                }
            });
        }
    };

    // these define our public api
    var methods = {
        resetDefaults: function() {
            $.fn.wysihtml5.defaultOptions = $.extend(true, {}, $.fn.wysihtml5.defaultOptionsCache);
        },
        bypassDefaults: function(options) {
            return this.each(function () {
                var $this = $(this);
                $this.data('wysihtml5', new Wysihtml5($this, options));
            });
        },
        shallowExtend: function (options) {
            var settings = $.extend({}, $.fn.wysihtml5.defaultOptions, options || {}, $(this).data());
            var that = this;
            return methods.bypassDefaults.apply(that, [settings]);
        },
        deepExtend: function(options) {
            var settings = $.extend(true, {}, $.fn.wysihtml5.defaultOptions, options || {});
            var that = this;
            return methods.bypassDefaults.apply(that, [settings]);
        },
        init: function(options) {
            var that = this;
            return methods.shallowExtend.apply(that, [options]);
        }
    };

    $.fn.wysihtml5 = function ( method ) {
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.wysihtml5' );
        }
    };

    $.fn.wysihtml5.Constructor = Wysihtml5;

    var defaultOptions = $.fn.wysihtml5.defaultOptions = {
        "font-styles": true,
        "color": false,
        "emphasis": true,
        "lists": true,
        "html": false,
        "link": true,
        "image": true,
        events: {},
        parserRules: {
            classes: {
                // (path_to_project/lib/css/wysiwyg-color.css)
                "wysiwyg-color-silver" : 1,
                "wysiwyg-color-gray" : 1,
                "wysiwyg-color-white" : 1,
                "wysiwyg-color-maroon" : 1,
                "wysiwyg-color-red" : 1,
                "wysiwyg-color-purple" : 1,
                "wysiwyg-color-fuchsia" : 1,
                "wysiwyg-color-green" : 1,
                "wysiwyg-color-lime" : 1,
                "wysiwyg-color-olive" : 1,
                "wysiwyg-color-yellow" : 1,
                "wysiwyg-color-navy" : 1,
                "wysiwyg-color-blue" : 1,
                "wysiwyg-color-teal" : 1,
                "wysiwyg-color-aqua" : 1,
                "wysiwyg-color-orange" : 1
            },
            tags: {
                "b":  {},
                "i":  {},
                "br": {},
                "ol": {},
                "ul": {},
                "li": {},
                "h1": {},
                "h2": {},
                "h3": {},
                "h4": {},
                "h5": {},
                "h6": {},
                "blockquote": {},
                "u": 1,
                "img": {
                    "check_attributes": {
                        "width": "numbers",
                        "alt": "alt",
                        "src": "url",
                        "height": "numbers"
                    }
                },
                "a":  {
                    check_attributes: {
                        'href': "url", // important to avoid XSS
                        'target': 'alt',
                        'rel': 'alt'
                    }
                },
                "span": 1,
                "div": 1,
                // to allow save and edit files with code tag hacks
                "code": 1,
                "pre": 1
            }
        },
        stylesheets: ["./lib/css/wysiwyg-color.css"], // (path_to_project/lib/css/wysiwyg-color.css)
        locale: "ch"
    };

    if (typeof $.fn.wysihtml5.defaultOptionsCache === 'undefined') {
        $.fn.wysihtml5.defaultOptionsCache = $.extend(true, {}, $.fn.wysihtml5.defaultOptions);
    }

    var locale = $.fn.wysihtml5.locale = {
        en: {
            font_styles: {
                normal: "Normal text",
                h1: "Heading 1",
                h2: "Heading 2",
                h3: "Heading 3",
                h4: "Heading 4",
                h5: "Heading 5",
                h6: "Heading 6"
            },
            emphasis: {
                bold: "Bold",
                italic: "Italic",
                underline: "Underline"
            },
            lists: {
                unordered: "Unordered list",
                ordered: "Ordered list",
                outdent: "Outdent",
                indent: "Indent"
            },
            link: {
                insert: "Insert link",
                cancel: "Cancel",
                target: "Open link in new window"
            },
            image: {
                insert: "Insert image",
                cancel: "Cancel"
            },
            html: {
                edit: "Edit HTML"
            },
            colours: {
                black: "Black",
                silver: "Silver",
                gray: "Grey",
                maroon: "Maroon",
                red: "Red",
                purple: "Purple",
                green: "Green",
                olive: "Olive",
                navy: "Navy",
                blue: "Blue",
                orange: "Orange"
            }
        },
        ch: {
            font_styles: {
                normal: "正文",
                h1: "标题 1",
                h2: "标题 2",
                h3: "标题 3",
                h4: "标题 4",
                h5: "标题 5",
                h6: "标题 6"
            },
            emphasis: {
                bold: "B",
                italic: "I",
                underline: "U"
            },
            lists: {
                unordered: "无序",
                ordered: "有序",
                outdent: "取消引用",
                indent: "添加引用"
            },
            link: {
                insert: "插入链接",
                cancel: "取消",
                target: "在新窗口打开"
            },
            image: {
                insert: "Insert image",
                cancel: "Cancel"
            },
            html: {
                edit: "Edit HTML"
            },
            colours: {
                black: "黑色",
                silver: "银灰色",
                gray: "灰色",
                maroon: "赤红色",
                red: "红色",
                purple: "紫色",
                green: "绿色",
                olive: "橄榄色",
                navy: "深蓝色",
                blue: "蓝色",
                orange: "橙色"
            }
        }
    };

}(window.jQuery, window.wysihtml5);;angular.module('bbsDire')
    .directive('richTextDire',[function(){
        return {
            link : function($scope,$element){
                $($element[0]).wysihtml5({
                    color : true,
                    size : 'default',
                    stylesheets : ['/css/bbs_0.0.0.css']
                });

                var caretBookmark;

                $($element[0]).prev().attr('id','richTextImageQueueID');

                $($element[0]).prev().find('a[data-wysihtml5-command=insertImage]').uploadify({
                    swf : '/resource/uploadify.swf',
                    uploader : '/upload',
                    multi : false,
                    buttonClass : 'glyphicon glyphicon-picture btn btn-default',
                    width : 40,
                    height : 33,
                    queueID : 'richTextImageQueueID',
                    buttonText : ' ',
                    onDialogOpen : function(){
                        $($element).data('wysihtml5').editor.currentView.element.focus(false);
                        caretBookmark = $($element).data('wysihtml5').editor.composer.selection.getBookmark();
                    },
                    onDialogClose : function(){
                        $($element).data('wysihtml5').editor.currentView.element.focus();
                    },
                    onUploadSuccess : function(file, data, response){
                        data = JSON.parse(data);
                        $($element).data('wysihtml5').editor.currentView.element.focus();
                        if (caretBookmark) {
                            $($element).data('wysihtml5').editor.composer.selection.setBookmark(caretBookmark);
                            caretBookmark = null;
                        }
                        $($element).data('wysihtml5').editor.composer.commands.exec("insertImage", data.url);
                    }
                });

            }
        };
    }]);
;/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-17
 * Time: 下午10:39
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsDire')
    .directive('timeDire',['$filter','$timeout',function($filter,$timeout){
    function schedule( element, attrs){
        element.text($filter('timeFilter')(attrs.value));
        $timeout(function(){
            schedule( element, attrs);
        },60000);
    }
    return function($scope,element,attr){
        schedule(element,attr);
    };
}]);;/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-17
 * Time: 下午10:39
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsDire')
    .directive('warnDire',['$timeout',function($timeout){
    return {
        restrict : 'E',
        template : '<div class="alert warn-dire" ></div>',
        replace : true,
        controller : function(){
          console.log('sdf');
        },
        link : function(scope,ele,attr,controller){
            var timeout = 3000;
            scope.warnShow = function(obj){
                if(!obj || !obj.text) return;
                angular.isNumber(obj.timeout) && (timeout = obj.timeout);
                ele.text(obj.text);
                ele.addClass('alert-' + (obj.sign ? obj.sign : 'warning'));
                ele.show();
                window.setTimeout(function(){
                    ele.hide();
                },timeout);
            }
        }
    };
}]);;/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-14
 * Time: 下午10:27
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsFilter',[]);;angular.module('bbsFilter').filter('dataRender', [function () {
    return function (data, label, select, array) {
        var labelValue = 'value';
        var selectValue = 'id';

        if (angular.isArray(label)) {
            array = label;
            label = labelValue;
            select = selectValue;
        }
        var viewValue = '';
        for (var i = 0; i < array.length; i++) {
            if (!angular.isArray(data)) {
                if (array[i][select] == data) return array[i][label];
            } else {
                for (var j = 0; j < data.length; j++) {
                    if (array[i][select] == data[j]) viewValue += (',' + array[i][label]);
                }
            }
        }
        return viewValue.length ? viewValue.substr(1) : '';
        return '';
    }
}]);;/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-14
 * Time: 下午10:33
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsFilter').filter('timeFilter',['$filter',function($filter){
    var dateFormat = $filter('date');

    return function(time){
        var timeStr;
        var currTime = (new Date()).getTime();
        var dValue = currTime - time;

        if((dValue = parseInt(dValue/1000)) < 60){
            timeStr = dValue + "秒前";
        }else if((dValue = parseInt(dValue/60)) < 60){
            timeStr = dValue + "分钟前";
        }else if((dValue = parseInt(dValue/60)) < 24){
            timeStr = dValue + "小时前";
        }else if((dValue = parseInt(dValue/24)) < 30){
            timeStr = dValue + "天前";
        }else{
            timeStr = dateFormat(time,'yyyy-MM-dd HH:mm:ss');
        }
        return timeStr;
    };
}]);;/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-7
 * Time: 下午5:29
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbs',['bbsCtrl','bbsFilter','bbsService','bbsDire','ui.bootstrap','angular.patch']);
Holder.run({
    themes: {
        "simple":{
            background:"#66FFCC",
            foreground:"#000",
            size:12
        }
    },
    images: "#new"
});
;/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-14
 * Time: 下午1:44
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsServiceRESTful',['ngResource']);;/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-14
 * Time: 下午1:44
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsServiceRESTful').factory('rfPost',['$resource',function($resource){
    var url = '/api/post/:postId';
    var actions = {
        list : {
            method : 'get'
        }
    };
    var post = $resource(url,{},actions);

    return post;
}]);;/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-14
 * Time: 下午1:44
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsServiceRESTful').factory('rfTeam',['$resource',function($resource){
    var url = '/api/team/:teamId';
    var actions = {
        list : {
            method : 'get'
        }
    };
    var team = $resource(url,{},actions);

    return team;
}]);;/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-14
 * Time: 下午1:44
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsServiceRESTful').factory('rfUser',['$resource',function($resource){
    var url = '/api/user/:userId';
    var actions = {
        list : {
            method : 'get'
        }
    };
    var user = $resource(url,{},actions);

    return user;
}]);;/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-17
 * Time: 下午9:33
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsService',['bbsServiceRESTful']);
