angular.module('demoApp', [])
      .controller('DemoController', function ($scope, $compile) {
        $scope.data = {
          name: '',
          domain: '',
          email: '',
          mobile: '',
          password: '',
          sender_name: '',
          sender_mobile: '',
          sender_email: '',
          sender_title: ''
        };

        $scope.buildUI = function (event) {
          let edmTMP =
            `
            <meta><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />
            
            <title></title>
            <style type="text/css">
              html,body {
                margin: 0;
                padding: 0;
              }
            </style>


            <body>

            <table border="0" cellpadding="0" cellspacing="0" style="background: #f6f6f6;" width="100%">

              <tbody>
                <tr>
                  <td align="center" class="main demo" id="primary" style="min-height: 520px;" valign="top" width="100%">
                  <table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" class="main" data-type="imgtxtcol" style="display: table; background-color: #f6f6f6;" width="640">
                    <tbody>
                      <tr>
                        <td align="center" style="padding: 15px 50px 10px 50px; color: #000000; line-height: 22px;">
                        <table align="center" width="128">
                          <tbody>
                            <tr>
                              <td width="128"><img align="center" alt="样本通" border="0" height="42" src="https://static-cdn.yangbentong.com/images/yangbentong_logo_150.png" style="display: block; margin: 0px auto; max-width: 130px; height: auto;" width="128" /></td>
                            </tr>
                          </tbody>
                        </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table align="center" border="0" cellpadding="0" cellspacing="0" class="main" data-type="title" style="display: table; background-color: #ffffff;" width="640">
                    <tbody>
                      <tr>
                        <td align="left" class="title" style="padding: 35px 0px 10px 34px; font-size: 24px; color: #0899de;"><span style="display: block; line-height: 1.75em; color: #4d4d4d; font-weight: 300; font-size: 14px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">Hi %name%，</span></td>
                      </tr>
                    </tbody>
                  </table>

                  <table align="center" border="0" cellpadding="0" cellspacing="0" class="main" data-type="text-block" style="display: table; background-color: #ffffff;" width="640">
                    <tbody>
                      <tr>
                        <td align="left" class="block-text" data-clonable="true" style="padding: 0 32px;">
                        <div class="textFix" style="margin: 10px 0px 10px 0px; line-height: 1.75em; text-align: left;">
                          <span style="display: block; line-height: 1.75em; color: #4d4d4d; font-weight: 300; font-size: 14px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">非常感谢您对样本通的认可，我们第一时间为您开通了试用账号：</span>
                          <span style="display: block; line-height: 1.75em; color: #4d4d4d; font-weight: 300; margin-top: 10px; font-size: 14px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">
                          团队域名：<b style="color:#0099cc;">%domain%</b><br>
                          账号：<b style="color:#0099cc;">%email%</b><br>
                          密码：<b style="color:#0099cc;">%password%</b><br>
                          </span>

                          <span style="display: block; line-height: 1.75em; color: #4d4d4d; font-weight: 300; margin-top: 10px; font-size: 14px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">
                          接下来，您可以选择所需场景开始体验。
                          </span>
                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table align="center" border="0" cellpadding="0" cellspacing="0" class="main" data-type="line" style="border: 0px; display: table; background-color: #ffffff;" width="640">
                    <tbody>
                      <tr>
                        <td style="padding: 15px 0px 0px;">
                        <table border="0" cellpadding="0" cellspacing="0" style="border-top: 1px solid #eee;" width="100%">
                          <tbody>
                            <tr>
                              <td height="15px" style="padding: 5px 0px 0px;" width="100%">&nbsp;</td>
                            </tr>
                          </tbody>
                        </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table align="center" border="0" cellpadding="0" cellspacing="0" class="main" data-type="text-block" style="display: table; background-color: #ffffff;" width="640">
                    <tbody>
                      <tr>
                        <td align="left" class="block-text" data-clonable="true" style="padding: 0 32px;">
                        <div class="textFix" style="margin: 0px 0px 10px 0px; line-height: 1.75em; text-align: left;">
                          <span style="display: block; line-height: 1.75em; color: #4d4d4d; font-weight: bold; font-size: 16px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">内容管理后台</span>
                          <span style="display: block; line-height: 1.75em; color: #4d4d4d; font-weight: 300; margin-top: 10px; font-size: 14px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">
                          适用角色：管理员
                          </span>

                          <span style="display: block; line-height: 1.75em; color: #4d4d4d; font-weight: 300; margin-top: 10px; font-size: 14px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">
                          在内容管理后台，您可以方便地对产品内容进行更新、设置访问权限、查看内容使用数据团队使用数据，还能对接微信公众平台，做到一站式内容发布。
                          </span>

                          <span style="display: block; line-height: 1.75em; color: #4d4d4d; font-weight: 300; margin-top: 10px; font-size: 14px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">
                            体验入口：
                            <a style="color:#0099cc;" href="http://%domain%.yangben.io/console/?utm_campaign=invitaion&utm_medium=console_url&utm_source=email&utm_domain=%domain%">http://%domain%.yangben.io/console</a>（请使用电脑浏览器访问）
                          </span></div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table align="center" border="0" cellpadding="0" cellspacing="0" class="main" data-type="line" style="border: 0px; display: table; background-color: #ffffff;" width="640">
                    <tbody>
                      <tr>
                        <td style="padding: 15px 0px 0px;">
                        <table border="0" cellpadding="0" cellspacing="0" style="border-top: 1px solid #eee;" width="100%">
                          <tbody>
                            <tr>
                              <td height="15px" style="padding: 5px 0px 0px;" width="100%">&nbsp;</td>
                            </tr>
                          </tbody>
                        </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table align="center" border="0" cellpadding="0" cellspacing="0" class="main" data-type="text-block" style="display: table; background-color: #ffffff;" width="640">
                    <tbody>
                      <tr>
                        <td align="left" class="block-text" data-clonable="true" style="padding: 0 32px;">
                        <div class="textFix" style="margin: 0px 0px 10px 0px; line-height: 1.75em; text-align: left;">
                          <span style="display: block; line-height: 1.75em; color: #4d4d4d; font-weight: bold; font-size: 16px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">企业版 App</span>
                          <span style="display: block; line-height: 1.75em; color: #4d4d4d; font-weight: 300; margin-top: 10px; font-size: 14px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">
                          适用角色：销售人员</span>
                          <span style="display: block; line-height: 1.25em; color: #4d4d4d; font-weight: 300; margin-top: 10px; font-size: 14px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">
                          企业版 App 是为销售人员设计的手机应用，销售人员通过手机就可完成：
                          </span>

                          <ul style="padding-left: 10px;">
                            <li style="display: block; line-height: 1.25em; color: #4d4d4d; font-weight: 300; margin-top: 10px; font-size: 14px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">•&nbsp;&nbsp;获取公司产品样本，支持离线查阅</li>
                            <li style="display: block; line-height: 1.25em; color: #4d4d4d; font-weight: 300; margin-top: 10px; font-size: 14px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">•&nbsp;&nbsp;支持微信、QQ、邮件、二维码等多种渠道分享资料</li>
                            <li style="display: block; line-height: 1.25em; color: #4d4d4d; font-weight: 300; margin-top: 10px; font-size: 14px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">•&nbsp;&nbsp;追踪分享后的使用数据，为销售提供决策辅助</li>
                          </ul>

                          <span style="display: block; line-height: 1.25em; color: #4d4d4d; font-weight: 300; margin-top: 10px; font-size: 14px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">
                          安装方式：
                          </span>

                          <ul style="padding-left: 10px;">
                            <li style="display: block; line-height: 1.25em; color: #4d4d4d; font-weight: 300; margin-top: 10px; font-size: 14px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">•&nbsp;&nbsp;访问网页链接安装：<a
                              style="color:#0099cc;"  href="http://app.ivymobi.com/ivymobi/orbit?utm_campaign=invitaion&utm_medium=app_download_url&utm_source=email&utm_domain=%domain%">http://app.ivymobi.com/ivymobi/orbit</a></li>
                            <li style="display: block; line-height: 1.25em; color: #4d4d4d; font-weight: 300; margin-top: 10px; font-size: 14px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">•&nbsp;&nbsp;用微信扫一扫安装
                              <p>
                                <img src="https://static-cdn.yangbentong.com/images/activation_email_app_download_qr.png" style="width: 100px; height: 100px;margin-left:15px" alt="企业版 App 下载">
                              </p>
                            </li>
                          </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table align="center" border="0" cellpadding="0" cellspacing="0" class="main" data-type="line" style="border: 0px; display: table; background-color: #ffffff;" width="640">
                    <tbody>
                      <tr>
                        <td style="padding: 15px 0px 0px;">
                        <table border="0" cellpadding="0" cellspacing="0" style="border-top: 1px solid #eee;" width="100%">
                          <tbody>
                            <tr>
                              <td height="15px" style="padding: 5px 0px 0px;" width="100%">&nbsp;</td>
                            </tr>
                          </tbody>
                        </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table align="center" border="0" cellpadding="0" cellspacing="0" class="main" data-type="text-block" style="display: table; background-color: #ffffff;" width="640">
                    <tbody>
                      <tr>
                        <td align="left" class="block-text" data-clonable="true" style="padding: 0 32px;">
                        <div class="textFix" style="margin: 0px 0px 10px 0px; line-height: 1.75em; text-align: left;">
                          <span style="display: block; line-height: 1.75em; color: #4d4d4d; font-weight: bold; font-size: 16px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">互动电子样本</span>
                          <span style="display: block; line-height: 1.75em; color: #4d4d4d; font-weight: 300; margin-top: 10px; font-size: 14px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">
                          适用角色：客户、营销人员</span>

                          <span style="display: block; line-height: 1.25em; color: #4d4d4d; font-weight: 300; margin-top: 10px; font-size: 14px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">
                          互动电子样本（eCatalog）是对纸质样本的延伸，能方便客户快速查找到所需产品。
                          </span>
                          <span style="display: block; line-height: 1.25em; color: #4d4d4d; font-weight: 300; margin-top: 10px; font-size: 14px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">
                          支持与微信公众号、客户网站无缝对接，让客户在任意平台都能很方便地获取到产品信息。
                          </span>

                          <span style="display: block; line-height: 1.75em; color: #4d4d4d; font-weight: 300; margin-top: 20px; font-size: 14px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">
                            访问以下链接，体验您的专属互动电子样本：<br>
                            <a
                              style="color:#0099cc;"  href="http://%domain%.yangben.io?utm_campaign=invitaion&utm_medium=ecatalog_url&utm_source=email&utm_domain=%domain%">http://%domain%.yangben.io</a></span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table align="center" border="0" cellpadding="0" cellspacing="0" class="main" data-type="line" style="border: 0px; display: table; background-color: #ffffff;" width="640">
                    <tbody>
                      <tr>
                        <td style="padding: 15px 0px 5px;">
                        <table border="0" cellpadding="0" cellspacing="0" style="border-top: 1px solid #eee;" width="100%">
                          <tbody>
                            <tr>
                              <td height="15px" style="padding: 15px 0px 0px;" width="100%">

                              </td>
                            </tr>
                          </tbody>
                        </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table align="center" border="0" cellpadding="0" cellspacing="0" class="main" data-type="text-block" style="display: table; background-color: #ffffff;" width="640">
                    <tbody>
                      <tr>
                        <td align="left" class="block-text" data-clonable="true" style="padding: 0 32px;">
                        <div class="textFix" style="margin: 0px 0px 10px 0px; line-height: 1.75em; text-align: left;">
                          <span style="display: block; line-height: 1.75em; color: #4d4d4d; font-weight: 300; margin-top: 10px; font-size: 14px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">

                          至此，相信您对「样本通」应该有了大体了解，如果您对行业解决方案感兴趣，请随时与我联络，届时将为您详细讲解。

                          <br><br>
                          祝您工作顺利！
                          </span>

                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table align="center" border="0" cellpadding="0" cellspacing="0" class="main" data-type="line" style="border: 0px; display: table; background-color: #ffffff;" width="640">
                    <tbody>
                      <tr>
                        <td style="padding: 5px 15px 15px;">
                        <table border="0" cellpadding="0" cellspacing="0" style="" width="100%">
                          <tbody>
                            <tr>
                              <td height="15px" style="padding: 15px 17px" width="100%">
                                <span style="display: block; line-height: 1.25em; color: #4d4d4d; font-weight: 300; margin-top: 10px; font-size: 14px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">
                                  %sender_name%</span>
                                  <span style="display: block; line-height: 1.25em; color: #4d4d4d; font-weight: 300; margin-top: 10px; font-size: 14px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">%sender_title%</span>
                                  <span style="display: block; line-height: 1.25em; color: #4d4d4d; font-weight: 300; margin-top: 10px; font-size: 14px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">手机：
                                  <a style="color:#0099cc;" href="tel://%sender_mobile%">%sender_mobile%</a></span>
                                  <span style="display: block; line-height: 1.25em; color: #4d4d4d; font-weight: 300; margin-top: 10px; font-size: 14px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">Email：
                                  <a style="color:#0099cc;" href="mailto://%sender_email%">%sender_email%</a></span>
                                  <span style="display: block; line-height: 1.25em; color: #4d4d4d; font-weight: 300; margin-top: 10px; font-size: 14px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">网站：
                                  <a style="color:#0099cc;" href="https://yangbentong.com/?utm_campaign=invitaion&utm_medium=url&utm_source=email&utm_domain=%domain%">https://yangbentong.com</a>
                                  </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table align="center" border="0" cellpadding="0" cellspacing="0" class="main" data-type="image" style="display: table; background-color: #ffffff;" width="640">
                    <tbody>
                      <tr>
                        <td align="center" class="image" height="8" style="clear: both; background-color: white;" width="640"><img alt="footer" height="8" src="https://static-cdn.yangbentong.com/images/edm-footer.jpg" style="max-height: 10px; max-width: 100%; overflow-x: hidden;" width="640" /></td>
                      </tr>
                    </tbody>
                  </table>

                  <!--table border="0" cellpadding="0" cellspacing="0" width="640">
                    <tbody>
                      <tr>
                        <td style="color: #b2b2b2; font-size: 13px; line-height: 1.75em; padding-top: 36px;text-align:center;">
                          <span style="display: inline-block; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">
                            如图片未正常显示，还请点击「显示图片」，以查看完整内容。<br>
                            本邮件由样本通系统发出，不想再接受此类邮件？<a href="%%user_defined_unsubscribe_link%%" style="color: #b2b2b2; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';" title="退订">点击退订</a>

                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table-->

                  <table align="center" border="0" cellpadding="12" cellspacing="0" width="640">
                    <tbody>
                      <tr>
                        <td align="center" style="color: #b2b2b2; font-size: 13px; line-height: 1.75em; padding-top: 18px; padding-bottom: 20px; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';">
                          <p>&copy;&nbsp;2016&nbsp;&nbsp;<a href="http://www.yangbentong.com/?utm_campaign=invitaion&utm_medium=url&utm_source=email&utm_domain=%domain%" style="text-decoration: none; color: #0899de; font-family: '-apple-system', 'BlinkMacSystemFont', 'Neue Haas Grotesk Text Pro', 'Arial Nova', 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Source Han Sans CN', 'Noto Sans SC', 'Source Han Sans TC', 'Noto Sans CJK TC', 'Hiragino Sans GB', 'sans-serif';" title="">
                          样本通</a> 产品信息营销管理专家<br>
                          Activate your contents, Power your sales.</p>
                          </td>
                      </tr>
                    </tbody>
                  </table>
                  </td>
                </tr>
              </tbody>

            </table>


            </body>
          `;


          edmTMP = ("" + edmTMP).replace(/%domain%/g, '{{data.domain}}')
            .replace(/%name%/g, '{{data.name}}')
            .replace(/%email%/g, '{{data.email}}')
            .replace(/%password%/g, '{{data.password}}')
            .replace(/%sender_name%/g, '{{data.sender_name}}')
            .replace(/%sender_title%/g, '{{data.sender_title}}')
            .replace(/%sender_mobile%/g, '{{data.sender_mobile}}')
            .replace(/%sender_email%/g, '{{data.sender_email}}');
          edmTMP = $compile(edmTMP)($scope);
          if ($scope.dataForm.email.$valid && $scope.dataForm.senderEmail.$valid) {
            $(".preview-result").html(edmTMP);
          } else {
            $(".preview-result").html(`
              <div class="errorInfo">邮件格式错误，请检查并输入正确的邮件</div>
            `);
          }
        };

        $scope.buildEDMCode = function (event) {
          debugger
          if ($scope.dataForm.email.$valid && $scope.dataForm.senderEmail.$valid) {
            $scope.previewCode = $(".preview-result").html();
            console.log($scope.previewCode)
            $scope.previewSubject = $scope.data.company + '样本通账号已开通';
          }
        };
        
      });