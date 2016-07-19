document.writeln("<!doctype html>");
document.writeln("<html lang=\"en\">");
document.writeln("");
document.writeln("<head>");
document.writeln("    <meta charset=\"utf-8\"/>");
document.writeln("    <title>社保大数据业务平台</title>");
document.writeln("");
document.writeln("    <link rel=\"stylesheet\" href=\"css/bootstrap.css\">");
document.writeln("    <!-- Bootstrap core CSS -->");
document.writeln("    <link href=\"css/bootstrap.min.css\" rel=\"stylesheet\">");
document.writeln("    <!-- Custom styles for this template -->");
document.writeln("    <link href=\"css/grid.css\" rel=\"stylesheet\">");
document.writeln("");
document.writeln("    <link rel=\"stylesheet\" href=\"css/layout.css\" type=\"text/css\" media=\"screen\" />");
document.writeln("    <!--[if lt IE 9]>");
document.writeln("    <link rel=\"stylesheet\" href=\"css/ie.css\" type=\"text/css\" media=\"screen\" />");
document.writeln("    <script src=\"http://html5shim.googlecode.com/svn/trunk/html5.js\"></script>");
document.writeln("    <![endif]-->");
document.writeln("    <script src=\"js/jquery-1.5.2.min.js\" type=\"text/javascript\"></script>");
document.writeln("    <script src=\"js/hideshow.js\" type=\"text/javascript\"></script>");
document.writeln("    <script src=\"js/jquery.tablesorter.min.js\" type=\"text/javascript\"></script>");
document.writeln("    <script type=\"text/javascript\" src=\"js/jquery.equalHeight.js\"></script>");
document.writeln("    <script type=\"text/javascript\">");
document.writeln("        $(document).ready(function()");
document.writeln("                {");
document.writeln("                    $(\".tablesorter\").tablesorter();");
document.writeln("                }");
document.writeln("        );");
document.writeln("        $(document).ready(function() {");
document.writeln("");
document.writeln("            //When page loads...");
document.writeln("            $(\".tab_content\").hide(); //Hide all content");
document.writeln("            $(\"ul.tabs li:first\").addClass(\"active\").show(); //Activate first tab");
document.writeln("            $(\".tab_content:first\").show(); //Show first tab content");
document.writeln("");
document.writeln("            //On Click Event");
document.writeln("            $(\"ul.tabs li\").click(function() {");
document.writeln("");
document.writeln("                $(\"ul.tabs li\").removeClass(\"active\"); //Remove any \"active\" class");
document.writeln("                $(this).addClass(\"active\"); //Add \"active\" class to selected tab");
document.writeln("                $(\".tab_content\").hide(); //Hide all tab content");
document.writeln("");
document.writeln("                var activeTab = $(this).find(\"a\").attr(\"href\"); //Find the href attribute value to identify the active tab + content");
document.writeln("                $(activeTab).fadeIn(); //Fade in the active ID content");
document.writeln("                return false;");
document.writeln("            });");
document.writeln("");
document.writeln("        });");
document.writeln("    </script>");
document.writeln("    <script type=\"text/javascript\">");
document.writeln("        $(function(){");
document.writeln("            $(\'.column\').equalHeight();");
document.writeln("        });");
document.writeln("    </script>");
document.writeln("");
document.writeln("    <script type=\"text/javascript\" src=\"http://cdn.hcharts.cn/jquery/jquery-1.8.3.min.js\"></script>");
document.writeln("    <script type=\"text/javascript\" src=\"http://cdn.hcharts.cn/highcharts/highcharts.js\"></script>");
document.writeln("    <script type=\"text/javascript\" src=\"http://cdn.hcharts.cn/highcharts/exporting.js\"></script>");
document.writeln("</head>");
document.writeln("");
document.writeln("");
document.writeln("<body>");
document.writeln("");
document.writeln("<!--<header id=\"header\">-->");
document.writeln("<!--<hgroup>-->");
document.writeln("<!--<h1 class=\"site_title\"><a href=\"index.html\">Website Admin</a></h1>-->");
document.writeln("<!--<h2 class=\"section_title\">Dashboard</h2><div class=\"btn_view_site\"><a href=\"http://www.medialoot.com\">View Site</a></div>-->");
document.writeln("<!--</hgroup>-->");
document.writeln("<!--</header> &lt;!&ndash; end of header bar &ndash;&gt;-->");
document.writeln("");
document.writeln("<div class=\"navbar navbar-fixed-top navbar-inverse\" >");
document.writeln("    <div class=\"container\">");
document.writeln("        <a id=\"logo\" href=\"/\">社保大数据业务平台</a>");
document.writeln("        <nav>");
document.writeln("            <ul class=\"nav navbar-nav pull-right\">");
document.writeln("                <li><a href=\"https://rubytutorial-jungieve.c9users.io/\">主页</a></li>");
document.writeln("                <li><a href=\"https://rubytutorial-jungieve.c9users.io/help\">帮助</a></li>");
document.writeln("                <li><a href=\"http://125.216.242.244:8080/ETL/html/index.html\">预处理</a></li>");
document.writeln("                <li><a href=\"http://125.216.242.244:8080/olap/\">OLAP分析</a></li>");
document.writeln("                <li><a href=\"http://125.216.242.244:8080/openreports/\">报表展示</a></li>");
document.writeln("                <li><a href=\"http://125.216.242.244:8080/highChart\">业务样例</a></li>");
document.writeln("                <li><a href=\"https://rubytutorial-jungieve.c9users.io/users\">其他成员</a></li>");
document.writeln("                <li class=\"dropdown\">");
document.writeln("                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">账户</a>");
document.writeln("                </li>");
document.writeln("            </ul>");
document.writeln("        </nav>");
document.writeln("    </div>");
document.writeln("</div>");
document.writeln("");
document.writeln("<div class=\"spacer\"></div>");
document.writeln("<div class=\"spacer\"></div>");
document.writeln("<div class=\"spacer\"></div>");
document.writeln("");
document.writeln("");
document.writeln("<script>js_method0()</script>");
document.writeln("</body>");
document.writeln("");
document.writeln("</html>");
document.writeln("");