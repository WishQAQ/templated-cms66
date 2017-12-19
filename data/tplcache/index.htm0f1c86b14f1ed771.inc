<?php
$z[0]=Array("global","",256,282);
$z[0][4]['name']="cfg_webname";
$z[1]=Array("global","",326,356);
$z[1][4]['name']="cfg_description";
$z[2]=Array("global","",393,420);
$z[2][4]['name']="cfg_keywords";
$z[3]=Array("include","",837,874);
$z[3][4]['filename']="header.htm";
$z[4]=Array("include","",882,920);
$z[4][4]['filename']="header1.htm";
$z[5]=Array("sql","\r\n                      \r\n                      [field:content function='cn_substr(@me,550)/]....\r\n                      \r\n                      ",1947,2163);
$z[5][4]['sql']="Select content from dede_arctype where id=1";
$z[6]=Array("arclist","\r\n                      <li class=\"content column-num1\">\r\n                        <div class=\"newstitle\">\r\n                          <ul>\r\n                            <li class=\"title\">\r\n                              <h3> <a href=\"[field:arcurl/]\"  title=\"[field:title/]\" target=\"_self\"> [field:title/]......</a> </h3>\r\n                            </li>\r\n                            <li class=\"date\"><span>日期：</span>[field:pubdate function=\"GetDateMK(@me)\"/] </li>\r\n                          </ul>\r\n                        </div>\r\n                      </li>\r\n                      <li class=\"clearBoth\"></li>\r\n                      ",10198,10893);
$z[6][4]['row']="5";
$z[6][4]['titlelen']="40";
$z[6][4]['typeid']="9";
$z[7]=Array("include","",13927,13964);
$z[7][4]['filename']="footer.htm";

?>