'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction(){
        const userInfo = await this.session('userInfo');
        if(think.isEmpty(userInfo)) {
            this.redirect('/login/autoLogin');
        }

        this.assign('username', userInfo.userId);

        return this.display();
    }

    pathlistAction() {
        let json ={
            "code": true,
            "use_time": 0.0060091018676758,
            "data": {
                "folderlist": [],
                "filelist": [
                    {
                        "name": "音悦台.oexe",
                        "path": "//desktop/音悦台.oexe",
                        "ext": "oexe",
                        "type": "url",
                        "mode": "-rwx rwx rwx (0777) ",
                        "atime": 1466437917,
                        "ctime": 1453106639,
                        "mtime": 1453106639,
                        "is_readable": 1,
                        "is_writeable": 1,
                        "size": 220,
                        "content": "http://www.431103.com",
                        "icon": "yingyuetai.png",
                        "width": "798",
                        "height": "450",
                        "simple": 0,
                        "resize": 1
                    },
                    {
                        "group": "1",
                        "name": "IE 6.oexe",
                        "path": "c:\\app\\ie6.bat",
                        "ext": "oexe",
                        "type": "url",
                        "icon": "ie6.png"
                    },
                    {
                        "group": "1",
                        "name": "IE 7.oexe",
                        "path": "c:\\app\\ie6.bat",
                        "ext": "oexe",
                        "type": "url",
                        "icon": "ie7.png"
                    },
                    {
                        "group": "2",
                        "name": "IE 8.oexe",
                        "path": "c:\\app\\ie6.bat",
                        "ext": "oexe",
                        "type": "url",
                        "icon": "ie8.png"
                    },
                    {
                        "group": "2",
                        "name": "IE 9.oexe",
                        "path": "c:\\app\\ie6.bat",
                        "ext": "oexe",
                        "type": "url",
                        "icon": "ie9.png"
                    },
                    {
                        "name": "IE 10.oexe",
                        "path": "c:\\app\\ie6.bat",
                        "ext": "oexe",
                        "type": "url",
                        "icon": "ie10.png"
                    }
                ],
                "info": {
                    "path_type": "",
                    "role": "",
                    "id": "",
                    "name": ""
                },
                "path_read_write": "writeable",
                "user_space": {
                    "size_max": 0.1,
                    "size_use": 1048576
                }
            }
        };

        return this.json(json);
    }

    commonjsAction() {
        let LNG = {
            "share_can_upload": "\u5141\u8bb8\u4e0a\u4f20",
            "move_error": "\u79fb\u52a8\u5931\u8d25",
            "setting_basic": "\u57fa\u7840\u8bbe\u7f6e",
            "recycle_open_if": "\u5f00\u542f\u56de\u6536\u7ad9",
            "recycle_open": "\u5f00\u542f",
            "system_role_admin_set": "\u7cfb\u7edf\u7ba1\u7406\u5458\u62e5\u6709\u6240\u6709\u6743\u9650\uff0c\u65e0\u9700\u8bbe\u7f6e!",
            "login_error_user_not_use": "\u7528\u6237\u5df2\u88ab\u7981\u7528\uff01\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458",
            "login_error_kod_version": "\u7a0b\u5e8f\u7248\u672c\u51b2\u7a81",
            "login_error_role": "\u6240\u5c5e\u6743\u9650\u7ec4\u4e0d\u5b58\u5728\uff0c\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458",
            "no_permission_group": "\u60a8\u4e0d\u5728\u8be5\u7528\u6237\u7ec4!",
            "no_permission_write": "\u8be5\u76ee\u5f55\u6ca1\u6709\u5199\u6743\u9650",
            "user": "\u7528\u6237",
            "save_as": "\u53e6\u5b58\u4e3a",
            "check_update": "\u68c0\u67e5\u66f4\u65b0",
            "keyboard_type": "\u952e\u76d8\u6a21\u5f0f",
            "font_family": "\u5b57\u4f53",
            "code_mode": "\u9ad8\u4eae\u8bed\u6cd5",
            "path_can_not_share": "\u8be5\u7c7b\u578b\u76ee\u5f55\u4e0d\u652f\u6301\u5206\u4eab",
            "wap_page_pc": "\u7535\u8111\u7248",
            "wap_page_phone": "\u624b\u673a\u7248",
            "no_permission_action": "\u60a8\u6ca1\u6709\u6b64\u6743\u9650\uff0c\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458!",
            "path_is_root_tips": "\u5df2\u7ecf\u5230\u6839\u76ee\u5f55\u4e86!",
            "kod_group": "\u7ec4\u7ec7\u67b6\u6784",
            "my_kod_group": "\u6211\u7684\u7ec4\u7ec7\u67b6\u6784",
            "space_tips_default": "(GB) 0\u5219\u4e0d\u9650\u5236",
            "space_tips_full": "\u4e0d\u9650\u5236",
            "space_size": "\u7a7a\u95f4\u5927\u5c0f",
            "space_size_use": "\u7a7a\u95f4\u4f7f\u7528",
            "space_is_full": "\u7a7a\u95f4\u5df2\u6ee1,\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458\u6269\u5145\u7a7a\u95f4\uff01",
            "system_open_true_path": "\u6210\u529f\u5728\u6587\u4ef6\u7ba1\u7406\u4e2d\u6253\u5f00\uff01",
            "group_role_error": "\u6743\u9650\u89d2\u8272\u9519\u8bef(\u6ca1\u6709\u6743\u9650\u8bbe\u7f6e)",
            "group_role_error_admin": "\u6743\u9650\u89d2\u8272\u9519\u8bef(\u6743\u9650\u4e0d\u591f)",
            "system_group": "\u7528\u6237\u4e0e\u5206\u7ec4",
            "system_group_edit": "\u5206\u7ec4\u7ba1\u7406",
            "system_group_role": "\u89d2\u8272\u8eab\u4efd",
            "system_group_create": "\u521b\u5efa\u5206\u7ec4",
            "system_group_name": "\u7ec4\u540d\u79f0",
            "system_group_father": "\u4e0a\u5c42\u7ec4",
            "system_group_add": "\u6dfb\u52a0\u5b50\u5206\u7ec4",
            "system_group_remove": "\u5220\u9664\u7528\u6237\u7ec4",
            "system_group_remove_tips": "\u786e\u8ba4\u5220\u9664\u7528\u6237\u7ec4\uff1f<br\/>\u5220\u9664\u540e\u5c5e\u4e8e\u8be5\u7ec4\u7684\u7528\u6237\u4f1a\u79fb\u9664\uff0c\u5b50\u7ec4\u79fb\u52a8\u5230\u6839\u76ee\u5f55",
            "system_group_select": "\u9009\u62e9\u6240\u5728\u90e8\u95e8",
            "system_group_select_result": "\u6210\u5458\u5c06\u5c5e\u4e8e\u4ee5\u4e0b\u90e8\u95e8",
            "system_member_action": "\u7528\u6237\u7ba1\u7406",
            "system_member_add": "\u65b0\u5efa\u7528\u6237",
            "system_member_role": "\u6743\u9650\u89d2\u8272",
            "system_member_role_select": "\u9009\u62e9",
            "system_member_password_tips": "\u4e0d\u586b\u5219\u4e0d\u4fee\u6539",
            "system_member_group": "\u6240\u5728\u7ec4",
            "system_member_group_edit": "\u7f16\u8f91\u5206\u7ec4",
            "system_member_remove": "\u5220\u9664\u7528\u6237",
            "system_member_remove_tips": "\u786e\u8ba4\u5220\u9664\u7528\u6237\uff1f<br\/>\u5220\u9664\u540e\u8be5\u7528\u6237\u76ee\u5f55\u4f1a\u5f7b\u5e95\u5220\u9664",
            "system_member_set_role": "\u786e\u8ba4\u66f4\u6539\u6240\u9009\u7528\u6237\u7684\u6743\u9650\u7ec4\uff1f",
            "system_member_remove_group": "\u786e\u5b9a\u5c06\u6240\u9009\u7528\u6237\u4ece\u8be5\u7ec4\u79fb\u9664\uff1f",
            "system_member_import": "\u6279\u91cf\u6dfb\u52a0",
            "system_member_use": "\u542f\u7528",
            "system_member_unuse": "\u7981\u7528",
            "system_member_group_config": "\u6279\u91cf\u8bbe\u7f6e\u7fa4\u7ec4",
            "system_member_group_remove": "\u4ece\u8be5\u5206\u7ec4\u79fb\u9664",
            "system_member_group_insert": "\u6dfb\u52a0\u5230\u5230\u5206\u7ec4",
            "system_member_group_reset": "\u91cd\u7f6e\u5206\u7ec4",
            "system_member_group_error": "\u7528\u6237\u7ec4\u9519\u8bef",
            "system_group_action": "\u7fa4\u7ec4\u7ba1\u7406",
            "system_role_add": "\u6dfb\u52a0\u89d2\u8272\u8eab\u4efd",
            "system_role_read": "\u53ea\u8bfb",
            "system_role_write": "\u53ef\u8bfb\u5199",
            "button_save_and_add": "\u4fdd\u5b58\u5e76\u7ee7\u7eed\u6dfb\u52a0",
            "path_cannot_search": "\u8be5\u76ee\u5f55\u4e0d\u652f\u6301\u641c\u7d22\uff01",
            "group_not_exist": "\u7528\u6237\u7ec4\u4e0d\u5b58\u5728\uff01",
            "upload_clear": "\u6e05\u7a7a",
            "upload_setting": "\u8bbe\u7f6e",
            "upload_tips": "\u91c7\u7528\u5206\u7247\u4e0a\u4f20,\u4e0d\u518d\u53d7php.ini\u9650\u5236;\u63a8\u8350chrome\u4f53\u9a8c\u6587\u4ef6\u5939\u62d6\u62fd\u4e0a\u4f20",
            "upload_exist": "\u540c\u540d\u6587\u4ef6\u5904\u7406",
            "upload_exist_rename": "\u91cd\u547d\u540d",
            "upload_exist_replace": "\u8986\u76d6",
            "upload_exist_skip": "\u8df3\u8fc7",
            "more": "\u66f4\u591a",
            "system_setting": "\u7cfb\u7edf\u8bbe\u7f6e",
            "openProject": "\u7f16\u8f91\u5668\u6253\u5f00\u9879\u76ee",
            "url_download": "\u4e0b\u8f7d\u5730\u5740",
            "url_link": "\u5916\u94fe\u5730\u5740",
            "app_type_link": "\u5feb\u6377\u65b9\u5f0f",
            "createLink": "\u521b\u5efa\u5feb\u6377\u65b9\u5f0f",
            "createProject": "\u6dfb\u52a0\u5230\u7f16\u8f91\u5668\u5de5\u7a0b",
            "only_read": "\u53ea\u8bfb",
            "only_read_desc": "\u8be5\u76ee\u5f55\u6ca1\u6709\u5199\u6743\u9650<br\/>\u53ef\u4ee5\u5728\u670d\u52a1\u5668\u8bbe\u7f6e\u6b64\u76ee\u5f55\u7684\u6743\u9650",
            "explorerNew": "kod \u94fe\u63a5",
            "zip_download_ready": "\u538b\u7f29\u540e\u4f1a\u81ea\u52a8\u4e0b\u8f7d,\u8bf7\u7a0d\u540e...",
            "set_background": "\u8bbe\u7f6e\u4e3a\u684c\u9762\u58c1\u7eb8",
            "share": "\u5171\u4eab",
            "my_share": "\u6211\u7684\u5171\u4eab",
            "group_share": "\u7fa4\u7ec4\u5171\u4eab\u76ee\u5f55",
            "share_edit": "\u7f16\u8f91\u5171\u4eab",
            "share_remove": "\u53d6\u6d88\u5171\u4eab",
            "share_remove_tips": "\u786e\u5b9a\u53d6\u6d88\u5171\u4eab\uff1f\u516c\u5f00\u8fde\u63a5\u5c06\u5931\u6548.",
            "share_path": "\u5171\u4eab\u8def\u5f84",
            "share_title": "\u8d44\u6e90\u5171\u4eab",
            "share_name": "\u5171\u4eab\u6807\u9898",
            "share_time": "\u5230\u671f\u65f6\u95f4",
            "share_time_desc": "\u7559\u7a7a\u8868\u793a\u4e0d\u8bbe\u7f6e\u5230\u671f\u65f6\u95f4",
            "share_password": "\u63d0\u53d6\u5bc6\u7801",
            "share_password_desc": "\u7559\u7a7a\u8868\u793a\u4e0d\u9700\u8981\u5bc6\u7801",
            "share_cancle": "\u53d6\u6d88\u5171\u4eab",
            "share_create": "\u521b\u5efa\u516c\u5f00\u94fe\u63a5",
            "share_url": "\u5171\u4eab\u5730\u5740",
            "share_not_download": "\u7981\u6b62\u4e0b\u8f7d",
            "share_not_download_tips": "\u5171\u4eab\u8005\u7981\u6b62\u4e86\u4e0b\u8f7d\uff01",
            "share_code_read": "\u4ee3\u7801\u9605\u8bfb",
            "share_save": "\u4fdd\u5b58\u914d\u7f6e",
            "share_error_param": "\u53c2\u6570\u9519\u8bef!",
            "share_error_user": "\u7528\u6237\u4fe1\u606f\u9519\u8bef\uff01",
            "share_error_sid": "\u5171\u4eab\u4e0d\u5b58\u5728\uff01",
            "share_error_time": "\u60a8\u6765\u665a\u4e86,\u8be5\u5171\u4eab\u5df2\u7ecf\u8fc7\u671f!",
            "share_error_path": "\u5171\u4eab\u6587\u4ef6\u4e0d\u5b58\u5728,\u88ab\u5220\u9664\u6216\u8005\u79fb\u8d70\u4e86!",
            "share_error_password": "\u5bc6\u7801\u9519\u8bef!",
            "share_error_show_tips": "\u8be5\u7c7b\u578b\u6587\u4ef6\u6682\u4e0d\u652f\u6301\u9884\u89c8!",
            "share_view_num": "\u6d4f\u89c8:",
            "share_download_num": "\u4e0b\u8f7d:",
            "share_open_page": "\u6253\u5f00\u5171\u4eab\u9875\u9762",
            "open_the_path": "\u8fdb\u5165\u6240\u5728\u76ee\u5f55",
            "recycle_clear": "\u6e05\u7a7a\u56de\u6536\u7ad9",
            "recycle_clear_success": "\u6e05\u7a7a\u56de\u6536\u7ad9\u6210\u529f\uff01",
            "recycle_clear_info": "\u60a8\u786e\u5b9a\u8981\u5f7b\u5e95\u5220\u9664\u56de\u6536\u7ad9\u5417\uff1f",
            "recycle_remove": "\u5f7b\u5e95\u5220\u9664",
            "fav_remove": "\u53d6\u6d88\u6536\u85cf",
            "remove_item": "\u9879\u5185\u5bb9",
            "uploading": "\u4e0a\u4f20\u4e2d...",
            "show_file": "\u65b0\u9875\u9762\u9884\u89c8",
            "unknow_file_title": "\u6587\u4ef6\u6253\u5f00\u63d0\u793a!",
            "unknow_file_tips": "\u6682\u4e0d\u652f\u6301\u6253\u5f00",
            "unknow_file_download": "\u4e0b\u8f7d\u5230\u672c\u5730",
            "unknow_file_office": "office\u9884\u89c8,kodexplorer\u9700\u8981\u90e8\u7f72\u5728\u5916\u7f51<br\/><br\/><a href='http:\/\/kalcaddle.com\/office.html' target='_blank'>\u8be6\u60c5><\/a>",
            "config_save_error_auth": "\u914d\u7f6e\u4fdd\u5b58\u5931\u8d25,\u7ba1\u7406\u5458\u7981\u6b62\u4e86\u6b64\u6743\u9650!",
            "config_save_error_file": "\u914d\u7f6e\u4fdd\u5b58\u5931\u8d25,kod\u76ee\u5f55\u9700\u8981\u6709\u5199\u6743\u9650!",
            "beautify_html": "html\u4ee3\u7801\u7f8e\u5316",
            "beautify_css": "css\u4ee3\u4ee3\u7801\u7f8e\u5316",
            "beautify_js": "js\u4ee3\u7801\u7f8e\u5316",
            "shortcut": "\u5feb\u6377\u952e",
            "learnMore": "\u4e86\u89e3\u66f4\u591a",
            "replace": "\u66ff\u6362",
            "selectAll": "\u5168\u9009",
            "reload": "\u91cd\u65b0\u8f7d\u5165",
            "about": "\u5173\u4e8e",
            "complete_current": "\u81ea\u52a8\u8865\u5168\u5f53\u524d",
            "view": "\u89c6\u56fe",
            "tools": "\u5de5\u5177",
            "help": "\u5e2e\u52a9",
            "not_exists": "\u4e0d\u5b58\u5728",
            "group_role_fileDownload": "\u6587\u4ef6\u4e0b\u8f7d",
            "group_role_share": "\u5171\u4eab",
            "system_setting_menu": "\u83dc\u5355\u7ba1\u7406",
            "system_name": "\u7a0b\u5e8f\u540d\u79f0",
            "system_name_desc": "\u7a0b\u5e8flogo\u6807\u9898",
            "system_desc": "\u7a0b\u5e8f\u63cf\u8ff0",
            "path_hidden": "\u76ee\u5f55\u6392\u9664",
            "path_hidden_desc": "\u9ed8\u8ba4\u4e0d\u663e\u793a\u7684\u76ee\u5f55\u548c\u6587\u4ef6,\u9017\u53f7\u9694\u5f00",
            "new_user_folder": "\u65b0\u7528\u6237\u9ed8\u8ba4\u521b\u5efa\u76ee\u5f55",
            "new_user_folder_desc": "\u7528\u9017\u53f7\u9694\u5f00",
            "new_user_app": "\u65b0\u7528\u6237\u9ed8\u8ba4\u521b\u5efaapp",
            "new_user_app_desc": "\u5e94\u7528\u4e2d\u5fc3\u7684\u5e94\u7528\uff0c\u591a\u4e2a\u7528\u9017\u53f7\u9694\u5f00",
            "auto_login": "\u6e38\u5ba2\u81ea\u52a8\u767b\u5f55",
            "auto_login_desc": "\u9ed8\u8ba4\u767b\u5f55\u7528\u6237\u540d\u4e3a<code>guest<\/code>\u7684\u7528\u6237\uff1b\u5f00\u542f\u540e\u786e\u4fdd<code>guest<\/code>\u7528\u6237\u5b58\u5728",
            "first_in": "\u767b\u5f55\u540e\u9ed8\u8ba4\u8fdb\u5165",
            "menu_name": "\u83dc\u5355\u540d",
            "menu_hidden": "\u9690\u85cf",
            "menu_show": "\u663e\u793a",
            "menu_move_down": "\u4e0b\u79fb",
            "menu_move_up": "\u4e0a\u79fb",
            "menu_move_del": "\u5220\u9664",
            "menu_open_window": "\u65b0\u7a97\u53e3\u6253\u5f00",
            "url_path": "url\u5730\u5740",
            "url_path_desc": "url\u5730\u5740\u6216js\u4ee3\u7801",
            "no_permission_read": "\u60a8\u6ca1\u6709\u8bfb\u53d6\u6743\u9650\uff01",
            "no_permission_download": "\u60a8\u6ca1\u6709\u4e0b\u8f7d\u6743\u9650\uff01",
            "php_env_check": "\u8fd0\u884c\u73af\u5883\u76d1\u6d4b:",
            "php_env_error": "\u73af\u5883\u9519\u8bef:",
            "php_env_error_ignore": "\u5ffd\u7565",
            "php_env_error_version": "PHP\u7248\u672c\u4e0d\u80fd\u4f4e\u4e8e5.0",
            "php_env_error_iconv": "\u672a\u5f00\u542f iconv",
            "php_env_error_mb_string": "\u672a\u5f00\u542f mb_string",
            "php_env_error_file": "\u672a\u5f00\u542f file_get_contents",
            "php_env_error_path": "\u4e0d\u53ef\u5199",
            "php_env_error_gd": "\u987b\u5f00\u542fphp GD\u5e93, \u5426\u5219\u9a8c\u8bc1\u7801\u3001\u7f29\u7565\u56fe\u4f7f\u7528\u5c06\u4e0d\u6b63\u5e38",
            "install_login": "\u60a8\u53ef\u4ee5\u7528\u5982\u4e0b\u8d26\u53f7\u767b\u5f55",
            "install_enter": "\u8fdb\u5165\u7cfb\u7edf",
            "install_user_default": "\u7ba1\u7406\u5458\uff1aadmin\/admin(\u8bf7\u52a1\u5fc5\u4fee\u6539\u5bc6\u7801)<br\/>\u666e\u901a\u7528\u6237\uff1ademo\/demo<br\/>\u6e38\u5ba2\u7528\u6237\uff1aguest\/guest",
            "copyright_desc": "\u8fd9\u662f\u4e00\u6b3e\u5907\u53d7\u597d\u8bc4\u7684web\u6587\u6863\u7ba1\u7406\u7cfb\u7edf\uff0c\u4f60\u53ef\u4ee5\u7528\u5b83\u6765\u505a\u5185\u90e8\u6587\u6863\u7ba1\u7406\u6216\u5171\u4eab\u3001\u4e5f\u53ef\u4ee5\u7528\u6765\u7ba1\u7406\u670d\u52a1\u5668\u4e0a\u7684\u7f51\u7ad9\uff0c\u53d6\u4ee3Ftp\r\n\t\t\uff0c\u751a\u81f3\u53ef\u4ee5\u5f53\u4f5cwebIDE\u76f4\u63a5\u5728\u7ebf\u5f00\u53d1\u3002\u540c\u65f6\u4f60\u4e5f\u53ef\u4ee5\u5c06\u6b64\u7a0b\u5e8f\u4e8c\u6b21\u5f00\u53d1\u6574\u5408\u5230\u4f60\u73b0\u6709\u7684\u7cfb\u7edf\u3002",
            "copyright_contact": "\u6388\u6743\u6216\u5b9a\u5236\u8bf7\u8054\u7cfbQQ:<a href=\"http:\/\/wpa.qq.com\/msgrd?v=3&uin=3232048103&site=qq&menu=yes\" target=\"_blank\">3232048103<\/a><a href=\"javascript:core.openIE('http:\/\/kalcaddle.com\/qa.html');\">\u95ee\u9898\u53cd\u9988<\/a>",
            "copyright_info": "Copyright \u00a9 <a href=\"http:\/\/kalcaddle.com\/\" target=\"_blank\">kalcaddle.com<\/a> All rights reserved.",
            "copyright_pre": "Powered by KodExplorer",
            "kod_name": "KodExplorer",
            "kod_name_desc": "\u2014\u2014\u8292\u679c\u4e91.\u8d44\u6e90\u7ba1\u7406\u5668",
            "kod_power_by": " - Powered by KodExplorer",
            "kod_name_copyright": "\u8292\u679c\u4e91\u2022\u8d44\u6e90\u7ba1\u7406\u5668",
            "login": "\u767b\u5f55",
            "guest_login": "\u6e38\u5ba2\u767b\u5f55",
            "username": "\u7528\u6237\u540d",
            "password": "\u5bc6\u7801",
            "login_code": "\u9a8c\u8bc1\u7801",
            "login_rember_password": "\u8bb0\u4f4f\u5bc6\u7801",
            "us": "\u5343\u5e06\u7f51\u7edc\u5de5\u4f5c\u5ba4",
            "login_not_null": "\u7528\u6237\u540d\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a!",
            "code_error": "\u9a8c\u8bc1\u7801\u9519\u8bef",
            "password_error": "\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef!",
            "password_not_null": "\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a!",
            "old_password_error": "\u539f\u5bc6\u7801\u9519\u8bef!",
            "permission": "\u6743\u9650!",
            "permission_edit": "\u4fee\u6539\u6743\u9650",
            "no_permission": "\u7ba1\u7406\u5458\u7981\u6b62\u4e86\u6b64\u6743\u9650!",
            "no_permission_ext": "\u7ba1\u7406\u5458\u7981\u6b62\u4e86\u8be5\u7c7b\u578b\u6587\u4ef6\u6743\u9650",
            "dialog_min": "\u6700\u5c0f\u5316",
            "dialog_min_all": "\u6700\u5c0f\u5316\u6240\u6709",
            "dialog_display_all": "\u663e\u793a\u6240\u6709\u7a97\u53e3",
            "dialog_close_all": "\u5173\u95ed\u6240\u6709\u7a97\u53e3",
            "open": "\u6253\u5f00",
            "others": "\u5176\u4ed6",
            "open_with": "\u6253\u5f00\u65b9\u5f0f",
            "close": "\u5173\u95ed",
            "close_all": "\u5173\u95ed\u5168\u90e8",
            "close_right": "\u5173\u95ed\u53f3\u4fa7\u6807\u7b7e",
            "close_others": "\u5173\u95ed\u5176\u4ed6",
            "loading": "\u64cd\u4f5c\u4e2d...",
            "warning": "\u8b66\u544a",
            "getting": "\u83b7\u53d6\u4e2d...",
            "sending": "\u6570\u636e\u53d1\u9001\u4e2d...",
            "data_error": "\u6570\u636e\u51fa\u9519\uff01",
            "get_success": "\u83b7\u53d6\u6210\u529f!",
            "save_success": "\u4fdd\u5b58\u6210\u529f!",
            "success": "\u64cd\u4f5c\u6210\u529f",
            "error": "\u64cd\u4f5c\u5931\u8d25",
            "error_repeat": "\u64cd\u4f5c\u5931\u8d25\uff0c\u8bf7\u6ce8\u610f\u540d\u79f0\u4e0d\u80fd\u91cd\u590d\uff01",
            "system_error": "\u7cfb\u7edf\u9519\u8bef",
            "name": "\u540d\u79f0",
            "type": "\u7c7b\u578b",
            "contain": "\u5305\u542b",
            "address": "\u4f4d\u7f6e",
            "size": "\u5927\u5c0f",
            "byte": "\u5b57\u8282",
            "path": "\u8def\u5f84",
            "action": "\u64cd\u4f5c",
            "create_time": "\u521b\u5efa\u65f6\u95f4",
            "modify_time": "\u4fee\u6539\u65f6\u95f4",
            "last_time": "\u6700\u540e\u8bbf\u95ee",
            "sort_type": "\u6392\u5e8f\u65b9\u5f0f",
            "time_type": "Y\/m\/d H:i:s",
            "time_type_info": "Y\u5e74m\u6708d\u65e5 H:i:s",
            "public_path": "\u516c\u5171\u76ee\u5f55",
            "file": "\u6587\u4ef6",
            "folder": "\u6587\u4ef6\u5939",
            "copy": "\u590d\u5236",
            "past": "\u7c98\u8d34",
            "clone": "\u521b\u5efa\u526f\u672c",
            "cute": "\u526a\u5207",
            "remove": "\u5220\u9664",
            "info": "\u5c5e\u6027",
            "list_type": "\u67e5\u770b",
            "list_icon": "\u56fe\u6807\u6392\u5217",
            "list_list": "\u5217\u8868\u6392\u5217",
            "sort_up": "\u9012\u589e",
            "sort_down": "\u9012\u51cf",
            "order_type": "\u6392\u5e8f\u65b9\u5f0f",
            "order_desc": "\u964d\u5e8f",
            "order_asc": "\u5347\u5e8f",
            "rename": "\u91cd\u547d\u540d",
            "add_to_fav": "\u6dfb\u52a0\u5230\u6536\u85cf\u5939",
            "search_in_path": "\u6587\u4ef6\u5939\u4e2d\u641c\u7d22",
            "add_to_play": "\u6dfb\u52a0\u5230\u64ad\u653e\u5217\u8868",
            "manage_fav": "\u7ba1\u7406\u6536\u85cf\u5939",
            "refresh_tree": "\u5237\u65b0\u6811\u76ee\u5f55",
            "manage_folder": "\u7ba1\u7406\u76ee\u5f55",
            "close_menu": "\u5173\u95ed\u83dc\u5355",
            "zip": "zip\u538b\u7f29",
            "unzip": "zip\u89e3\u538b\u5230\u5f53\u524d",
            "clipboard": "\u67e5\u770b\u526a\u8d34\u677f",
            "full_screen": "\u5168\u5c4f\/\u9000\u51fa\u5168\u5c4f",
            "tips": "\u63d0\u793a",
            "ziping": "\u6b63\u5728\u538b\u7f29...",
            "unziping": "\u6b63\u5728\u89e3\u538b...",
            "moving": "\u79fb\u52a8\u64cd\u4f5c\u4e2d...",
            "remove_title": "\u5220\u9664\u786e\u8ba4",
            "remove_info": "\u786e\u8ba4\u5220\u9664\u9009\u4e2d\u5185\u5bb9\u5417\uff1f",
            "name_isexists": "\u51fa\u9519\u4e86,\u8be5\u540d\u79f0\u5df2\u5b58\u5728\uff01",
            "install": "\u5b89\u88c5",
            "width": "\u5bbd",
            "height": "\u9ad8",
            "app": "\u5e94\u7528",
            "app_store": "\u5e94\u7528\u5546\u5e97",
            "app_create": "\u521b\u5efa\u5e94\u7528",
            "app_edit": "\u4fee\u6539\u5e94\u7528",
            "app_group_all": "\u5168\u90e8",
            "app_group_game": "\u6e38\u620f",
            "app_group_tools": "\u5de5\u5177",
            "app_group_reader": "\u9605\u8bfb",
            "app_group_movie": "\u5f71\u89c6",
            "app_group_music": "\u97f3\u4e50",
            "app_group_life": "\u751f\u6d3b",
            "app_group_others": "\u5176\u4ed6",
            "app_desc": "\u63cf\u8ff0",
            "app_icon": "\u5e94\u7528\u56fe\u6807",
            "app_icon_show": "url\u5730\u5740\u6216\u8be5\u76ee\u5f55",
            "app_group": "\u5e94\u7528\u5206\u7ec4",
            "app_type": "\u7c7b\u578b",
            "app_type_url": "\u94fe\u63a5",
            "app_type_code": "js\u6269\u5c55",
            "app_display": "\u5916\u89c2",
            "app_display_border": "\u65e0\u8fb9\u6846(\u9009\u4e2d\u5373\u65e0\u8fb9\u6846)",
            "app_display_size": "\u8c03\u6574\u5927\u5c0f(\u9009\u4e2d\u5373\u53ef\u8c03\u6574)",
            "app_size": "\u5c3a\u5bf8",
            "app_url": "\u94fe\u63a5\u5730\u5740",
            "app_code": "js \u4ee3\u7801",
            "edit": "\u7f16\u8f91",
            "edit_can_not": "\u4e0d\u662f\u6587\u672c\u6587\u4ef6",
            "edit_too_big": "\u6587\u4ef6\u592a\u5927,\u4e0d\u80fd\u5927\u4e8e40M",
            "open_default": "\u9ed8\u8ba4\u65b9\u5f0f\u6253\u5f00",
            "open_ie": "\u6d4f\u89c8\u5668\u6253\u5f00",
            "refresh": "\u5237\u65b0",
            "refresh_all": "\u5f3a\u5236\u5237\u65b0",
            "newfile": "\u65b0\u5efa\u6587\u4ef6",
            "newfolder": "\u65b0\u5efa\u6587\u4ef6\u5939",
            "newothers": "\u65b0\u5efa\u5176\u4ed6",
            "path_loading": "\u8f7d\u5165\u4e2d...",
            "go": "\u8d70\u7740!",
            "go_up": "\u4e0a\u5c42",
            "history_next": "\u524d\u8fdb",
            "history_back": "\u540e\u9000",
            "address_in_edit": "\u70b9\u51fb\u8fdb\u5165\u7f16\u8f91\u72b6\u6001",
            "double_click_rename": "\u53cc\u51fb\u540d\u79f0\u91cd\u547d\u540d",
            "double_click_open": "\u53cc\u51fb\u6253\u5f00",
            "path_null": "\u8be5\u6587\u4ef6\u5939\u4e3a\u7a7a\uff0c\u53ef\u4ee5\u62d6\u62fd\u6587\u4ef6\u5230\u8be5\u7a97\u53e3\u4e0a\u4f20\u3002",
            "upload": "\u4e0a\u4f20",
            "upload_ready": "\u7b49\u5f85\u4e0a\u4f20...",
            "upload_success": "\u4e0a\u4f20\u6210\u529f",
            "upload_path_current": "\u5207\u6362\u5230\u5f53\u524d\u76ee\u5f55",
            "upload_select": "\u9009\u62e9\u6587\u4ef6",
            "upload_max_size": "\u6700\u5927\u5141\u8bb8",
            "upload_size_info": "\u5982\u679c\u60f3\u914d\u7f6e\u66f4\u5927\uff0c\u8bf7\u4fee\u6539php.ini\u4e2d\u5141\u8bb8\u4e0a\u4f20\u7684\u6700\u5927\u503c\u3002\u9009\u62e9\u6587\u4ef6\u65f6,\u5927\u4e8e\u8be5\u914d\u7f6e\u7684\u5c06\u81ea\u52a8\u8fc7\u6ee4\u6389\u3002",
            "upload_error": "\u4e0a\u4f20\u5931\u8d25",
            "upload_muti": "\u591a\u6587\u4ef6\u4e0a\u4f20",
            "upload_drag": "\u62d6\u62fd\u4e0a\u4f20",
            "upload_drag_tips": "\u677e\u5f00\u5373\u53ef\u4e0a\u4f20!",
            "path_not_allow": "\u6587\u4ef6\u540d\u4e0d\u5141\u8bb8\u51fa\u73b0",
            "download": "\u4e0b\u8f7d",
            "download_address": "\u4e0b\u8f7d\u5730\u5740",
            "download_ready": "\u5373\u5c06\u4e0b\u8f7d",
            "download_success": "\u4e0b\u8f7d\u6210\u529f\uff01",
            "download_error": "\u4e0b\u8f7d\u5931\u8d25\uff01",
            "download_error_create": "\u5199\u5165\u51fa\u9519!",
            "download_error_exists": "\u8fdc\u7a0b\u6587\u4ef6\u4e0d\u5b58\u5728!",
            "upload_error_null": "\u6ca1\u6709\u6587\u4ef6\uff01",
            "upload_error_big": "\u6587\u4ef6\u5927\u5c0f\u8d85\u8fc7\u670d\u52a1\u5668\u9650\u5236",
            "upload_error_move": "\u79fb\u52a8\u6587\u4ef6\u5931\u8d25\uff01",
            "upload_error_exists": "\u8be5\u6587\u4ef6\u5df2\u5b58\u5728",
            "upload_local": "\u672c\u5730\u4e0a\u4f20",
            "download_from_server": "\u8fdc\u7a0b\u4e0b\u8f7d",
            "save_path": "\u4fdd\u5b58\u8def\u5f84",
            "upload_select_muti": "\u53ef\u9009\u62e9\u591a\u4e2a\u6587\u4ef6\u4e0a\u4f20",
            "search": "\u641c\u7d22",
            "searching": "\u641c\u7d22\u4e2d...",
            "search_null": "\u6ca1\u6709\u641c\u7d22\u7ed3\u679c!",
            "search_uplow": "\u533a\u5206\u5927\u5c0f\u5199",
            "search_content": "\u641c\u7d22\u6587\u4ef6\u5185\u5bb9",
            "search_info": "\u8bf7\u8f93\u5165\u641c\u7d22\u8bcd\u548c\u8def\u5f84\u8fdb\u884c\u641c\u7d22\uff01",
            "search_ext_tips": "\u7528|\u9694\u5f00;\u4f8b\u5982 php|js|css<br\/>\u4e0d\u586b\u5219\u641c\u7d22\u9ed8\u8ba4\u6587\u672c\u6587\u4ef6",
            "file_type": "\u6587\u4ef6\u7c7b\u578b",
            "goto": "\u8df3\u8f6c\u5230",
            "server_dwonload_desc": "\u4e2a\u4efb\u52a1\u52a0\u5165\u5230\u4e0b\u8f7d\u5217\u8868",
            "parent_permission": "\u7236\u76ee\u5f55\u6743\u9650",
            "root_path": "\u6211\u7684\u6587\u6863",
            "lib": "\u5e93",
            "fav": "\u6536\u85cf\u5939",
            "desktop": "\u684c\u9762",
            "browser": "\u6d4f\u89c8\u5668",
            "my_computer": "\u6211\u7684\u7535\u8111",
            "recycle": "\u56de\u6536\u7ad9",
            "my_document": "\u6211\u7684\u6587\u6863",
            "my_picture": "\u6211\u7684\u7167\u7247",
            "my_music": "\u6211\u7684\u97f3\u4e50",
            "my_movie": "\u6211\u7684\u89c6\u9891",
            "my_download": "\u6211\u7684\u4e0b\u8f7d",
            "ui_desktop": "\u684c\u9762",
            "ui_explorer": "\u6587\u4ef6\u7ba1\u7406",
            "ui_editor": "\u7f16\u8f91\u5668",
            "adminer": "adminer",
            "ui_project_home": "\u9879\u76ee\u4e3b\u9875",
            "ui_login": "\u767b\u5f55",
            "ui_logout": "\u9000\u51fa",
            "setting": "\u7cfb\u7edf\u8bbe\u7f6e",
            "setting_title": "\u9009\u9879",
            "setting_user": "\u4e2a\u4eba\u4e2d\u5fc3",
            "setting_password": "\u4fee\u6539\u5bc6\u7801",
            "setting_password_old": "\u539f\u5bc6\u7801",
            "setting_password_new": "\u4fee\u6539\u4e3a",
            "setting_language": "\u8bed\u8a00\u8bbe\u7f6e",
            "setting_member": "\u7528\u6237\u7ba1\u7406",
            "setting_group": "\u7528\u6237\u7ec4\u7ba1\u7406",
            "setting_group_add": "\u6dfb\u52a0\u7528\u6237\u7ec4",
            "setting_group_edit": "\u7f16\u8f91\u7528\u6237\u7ec4",
            "setting_theme": "\u4e3b\u9898\u8bbe\u7f6e",
            "setting_wall": "\u66f4\u6362\u58c1\u7eb8",
            "setting_wall_diy": "\u81ea\u5b9a\u4e49\u58c1\u7eb8\uff1a",
            "setting_wall_info": "\u56fe\u7247url\u5730\u5740\uff0c\u672c\u5730\u56fe\u7247\u53ef\u4ee5\u53f3\u952e\u56fe\u7247\u6d4f\u89c8\u5668\u6253\u5f00\u5373\u53ef\u5f97\u5230",
            "setting_fav": "\u6536\u85cf\u5939\u7ba1\u7406",
            "setting_player": "\u64ad\u653e\u5668",
            "setting_player_music": "\u97f3\u4e50\u64ad\u653e\u5668\u8bbe\u7f6e",
            "setting_player_movie": "\u89c6\u9891\u64ad\u653e\u5668\u8bbe\u7f6e",
            "setting_help": "\u4f7f\u7528\u5e2e\u52a9",
            "setting_about": "\u5173\u4e8e\u4f5c\u54c1",
            "setting_success": "\u4fee\u6539\u5df2\u751f\u6548\uff01",
            "can_not_repeat": "\u4e0d\u5141\u8bb8\u91cd\u590d",
            "absolute_path": "\u7edd\u5bf9\u5730\u5740",
            "group": "\u7528\u6237\u7ec4",
            "data_not_full": "\u6570\u636e\u63d0\u4ea4\u4e0d\u5b8c\u6574\uff01",
            "default_user_can_not_do": "\u9ed8\u8ba4\u7528\u6237\u4e0d\u80fd\u64cd\u4f5c",
            "default_group_can_not_do": "\u9ed8\u8ba4\u7528\u6237\u7ec4\u4e0d\u80fd\u64cd\u4f5c",
            "username_can_not_null": "\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01",
            "groupname_can_not_null": "\u7528\u6237\u7ec4\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01",
            "groupdesc_can_not_null": "\u7528\u6237\u7ec4\u63cf\u8ff0\u4e0d\u80fd\u4e3a\u7a7a\uff01",
            "group_move_user_error": "\u6240\u5c5e\u7528\u6237\u7ec4\u7528\u6237\u79fb\u52a8\u5931\u8d25",
            "group_already_remove": "\u8be5\u7528\u6237\u7ec4\u5df2\u88ab\u5220\u9664",
            "group_not_exists": "\u8be5\u7528\u6237\u7ec4\u4e0d\u5b58\u5728",
            "member_add": "\u6dfb\u52a0\u7528\u6237",
            "password_null_not_update": "\u5bc6\u7801\u4e0d\u586b\u8868\u793a\u4e0d\u66f4\u6539",
            "if_save_file": "\u6587\u4ef6\u5c1a\u672a\u4fdd\u5b58,\u662f\u5426\u4fdd\u5b58\uff1f",
            "if_remove": "\u786e\u8ba4\u5220\u9664",
            "member_remove_tips": "\u5220\u9664\u540e\u8be5\u7528\u6237\u76ee\u5f55\u4f1a\u88ab\u6e05\u7a7a",
            "group_remove_tips": "\u5220\u9664\u540e\u8be5\u7528\u6237\u7ec4\u7528\u6237\u65e0\u6cd5\u767b\u5f55<br\/>(\u9700\u8981\u91cd\u65b0\u8bbe\u7f6e\u7528\u6237\u7ec4)",
            "group_name": "\u7528\u6237\u7ec4\u540d",
            "group_name_tips": "\u5efa\u8bae\u82f1\u6587\u540d\uff0c\u4e0d\u80fd\u91cd\u590d",
            "group_desc": "\u5c55\u793a\u540d\u79f0",
            "group_desc_tips": "\u7ec4\u540d\u63cf\u8ff0",
            "group_role_ext": "\u6269\u5c55\u540d\u9650\u5236",
            "group_role_ext_tips": "\u591a\u4e2a\u7528|\u5206\u9694\u5f00",
            "group_role_file": "\u6587\u4ef6\u7ba1\u7406",
            "group_role_upload": "\u5141\u8bb8\u4e0a\u4f20",
            "group_role_user": "\u7528\u6237\u6570\u636e",
            "group_role_group": "\u7528\u6237\u7ec4\u7ba1\u7406",
            "group_role_member": "\u7528\u6237\u7ba1\u7406",
            "group_role_mkfile": "\u65b0\u5efa\u6587\u4ef6",
            "group_role_mkdir": "\u65b0\u5efa\u6587\u4ef6\u5939",
            "group_role_pathrname": "\u91cd\u547d\u540d",
            "group_role_pathdelete": "\u6587\u4ef6(\u5939)\u5220\u9664",
            "group_role_pathinfo": "\u6587\u4ef6(\u5939)\u5c5e\u6027",
            "group_role_pathmove": "\u79fb\u52a8(\u590d\u5236\/\u526a\u5207\/\u7c98\u8d34\/\u62d6\u62fd\u64cd\u4f5c)",
            "group_role_zip": "zip\u538b\u7f29",
            "group_role_unzip": "zip\u89e3\u538b",
            "group_role_search": "\u641c\u7d22",
            "group_role_filesave": "\u7f16\u8f91\u4fdd\u5b58\u6587\u4ef6",
            "group_role_can_upload": "\u4e0a\u4f20\u4e0b\u8f7d",
            "group_role_download": "\u8fdc\u7a0b\u4e0b\u8f7d",
            "group_role_passowrd": "\u4fee\u6539\u5bc6\u7801",
            "group_role_config": "\u914d\u7f6e\u6570\u636e",
            "group_role_fav": "\u6536\u85cf\u5939\u64cd\u4f5c(\u6dfb\u52a0\/\u7f16\u8f91\/\u5220\u9664)",
            "action_list": "\u5217\u8868\u67e5\u770b",
            "action_add": "\u6dfb\u52a0",
            "action_edit": "\u7f16\u8f91",
            "action_del": "\u5220\u9664",
            "group_role_ext_warning": "\u4e0d\u5141\u8bb8\u6b64\u7c7b\u6587\u4ef6\u7684\u4e0a\u4f20,<br\/>\u91cd\u547d\u540d(\u91cd\u547d\u540d\u4e3a\u6307\u5b9a\u6269\u5c55\u540d),<br\/>\u7f16\u8f91\u4fdd\u5b58,\u8fdc\u7a0b\u4e0b\u8f7d,\u89e3\u538b",
            "group_tips": "<li>1.\u7528\u6237\u7ec4\u540d\u4e0d\u80fd\u91cd\u590d\uff0c\u4fee\u6539\u7ec4\u540d\u540e\u539f\u5c5e\u4e8e\u6539\u7ec4\u7528\u6237\u4f1a\u81ea\u52a8\u5173\u8054<\/li><li>2.\u6269\u5c55\u540d\u9650\u5236\u5173\u7cfb\u7cfb\u7edf\u5b89\u5168\u6027\uff0c\u8bf7\u52a1\u5fc5\u8c28\u614e\u64cd\u4f5c<i>(\u679c\u5728web\u76ee\u5f55\u4e0b\u65b0\u5efaphp;\u5c31\u610f\u5473\u7740\u6539\u7a0b\u5e8f\u7684\u6743\u9650\u5bf9\u6b64\u7528\u6237\u5f62\u540c\u865a\u8bbe)<\/i><\/li><li>3.\u6237\u7ba1\u7406\u3001\u6743\u9650\u7ec4\u7ba1\u7406\uff1b\u67e5\u770b\u6743\u9650\u548c\u589e\u5220\u6539\u6743\u9650\u662f\u7ed1\u5b9a\u7684\uff1b\u7a0b\u5e8f\u4f1a\u81ea\u52a8\u5173\u8054<\/li><li>4.\u8bbe\u5b9a\u6743\u9650\u7ec4\u80fd\u6dfb\u52a0\u6743\u9650\u7ec4\u540e\uff0c\u540e\u7eed\u6743\u9650\u662f\u4e0d\u7ee7\u627f\u7684<i>\uff08\u6b64\u6743\u9650\u76f8\u5f53\u4e8e\u6700\u9ad8\u6743\u9650\uff09<\/i><\/li>",
            "not_null": "\u5fc5\u586b\u9879\u4e0d\u80fd\u4e3a\u7a7a!",
            "picture_can_not_null": "\u56fe\u7247\u5730\u5740\u4e0d\u80fd\u4e3a\u7a7a!",
            "rname_success": "\u91cd\u547d\u540d\u6210\u529f\uff01",
            "please_inpute_search_words": "\u8bf7\u8f93\u5165\u8981\u641c\u7d22\u7684\u5b57\u7b26\u4e32",
            "remove_success": "\u5220\u9664\u6210\u529f\uff01",
            "remove_fali": "\u5220\u9664\u5931\u8d25!",
            "clipboard_null": "\u526a\u8d34\u677f\u4e3a\u7a7a\uff01",
            "create_success": "\u65b0\u5efa\u6210\u529f\uff01",
            "create_error": "\u65b0\u5efa\u5931\u8d25,\u8bf7\u68c0\u67e5\u76ee\u5f55\u6743\u9650\uff01",
            "copy_success": "\u3010\u590d\u5236\u3011\u2014\u2014 \u8986\u76d6\u526a\u8d34\u677f\u6210\u529f!",
            "cute_success": "\u3010\u526a\u5207\u3011\u2014\u2014 \u8986\u76d6\u526a\u8d34\u677f\u6210\u529f!",
            "clipboard_state": "\u526a\u5207\u677f\u72b6\u6001:",
            "no_permission_write_all": "\u8be5\u6587\u4ef6\u6216\u76ee\u5f55\u6ca1\u6709\u5199\u6743\u9650",
            "no_permission_write_file": "\u8be5\u6587\u4ef6\u6ca1\u6709\u5199\u6743\u9650",
            "copy_not_exists": "\u6765\u6e90\u4e0d\u5b58\u5728",
            "current_has_parent": "\u76ee\u6807\u6587\u4ef6\u5939\u662f\u6e90\u6587\u4ef6\u5939\u7684\u5b50\u6587\u4ef6\u5939!",
            "past_success": "<b>\u7c98\u8d34\u64cd\u4f5c\u5b8c\u6210<\/b>",
            "cute_past_success": "<b>\u526a\u5207\u64cd\u4f5c\u5b8c\u6210<\/b>(\u6e90\u6587\u4ef6\u88ab\u5220\u9664,\u526a\u8d34\u677f\u6e05\u7a7a)",
            "zip_success": "\u538b\u7f29\u5b8c\u6210",
            "not_zip": "\u4e0d\u662f\u538b\u7f29\u6587\u4ef6",
            "zip_null": "\u6ca1\u6709\u9009\u62e9\u7684\u6587\u4ef6\u6216\u76ee\u5f55",
            "unzip_success": "\u89e3\u538b\u5b8c\u6210",
            "gotoline": "\u8df3\u8f6c\u5230\u884c",
            "path_is_current": "\u6240\u6253\u5f00\u8def\u5f84\u548c\u5f53\u524d\u8def\u5f84\u4e00\u6837\uff01",
            "path_exists": "\u8be5\u540d\u79f0\u5df2\u5b58\u5728\uff01",
            "undo": "\u64a4\u9500",
            "redo": "\u53cd\u64a4\u9500",
            "preview": "\u9884\u89c8",
            "wordwrap": "\u81ea\u52a8\u6362\u884c(\u4e0d\u81ea\u52a8\u6362\u884c)",
            "char_all_display": "\u663e\u793a\u4e0d\u53ef\u89c1\u5b57\u7b26(\u9690\u85cf)",
            "auto_complete": "\u81ea\u52a8\u63d0\u793a(\u53d6\u6d88)",
            "function_list": "\u51fd\u6570\u5217\u8868",
            "code_theme": "\u4ee3\u7801\u98ce\u683c",
            "font_size": "\u5b57\u4f53\u5927\u5c0f",
            "button_ok": "\u786e\u5b9a",
            "button_submit": "\u63d0\u4ea4",
            "button_set": "\u8bbe\u7f6e",
            "button_cancel": "\u53d6\u6d88",
            "button_edit": "\u7f16\u8f91",
            "button_save": "\u4fdd\u5b58",
            "button_save_all": "\u4fdd\u5b58\u5168\u90e8",
            "button_not_save": "\u4e0d\u4fdd\u5b58",
            "button_add": "\u6dfb\u52a0",
            "button_back_add": "\u8fd4\u56de\u6dfb\u52a0",
            "button_del": "\u5220\u9664",
            "button_save_edit": "\u4fdd\u5b58\u4fee\u6539",
            "button_save_submit": "\u4fdd\u5b58\u63d0\u4ea4",
            "button_select_all": "\u5168\u9009\/\u53cd\u9009"
        };

        let AUTH = {};
        let G = {
            "lang": "zh_CN",
            "is_root": 1,
            "user_name": "admin",
            "web_root": think.ROOT_PATH,
            "web_host": this.http.host,
            "static_path": "\/static\/home\/",
            "basic_path": think.ROOT_PATH,
            "app_host": this.http.host,
            "myhome": think.ROOT_PATH,
            "upload_max": 2097152,
            "version": "3.21",
            "version_desc": "product",
            "json_data": "",
            "theme": "metro\/",
            "list_type": "icon",
            "sort_field": "name",
            "sort_order": "up",
            "musictheme": "mp3player",
            "movietheme": "webplayer"
        };

        let json = 'LNG='+JSON.stringify(LNG)+';AUTH=' + JSON.stringify(AUTH)+';G=' + JSON.stringify(G);

        return this.json(json);
    }
}