@echo off
pushd "C:\Program Files (x86)\Microsoft Office\root\Office16"
pushd "C:\Program Files\Microsoft Office\root\Office16"
pushd "C:\Program Files (x86)\Microsoft Office\Office16"
pushd "C:\Program Files\Microsoft Office\Office16"
cscript //nologo ospp.vbs /inpkey:KDX7X-BNVR8-TXXGX-4Q7Y8-78VT3
cscript //nologo ospp.vbs /sethst:s1.kms.cx
cscript //nologo ospp.vbs /setprt:1688
cscript //nologo ospp.vbs /act
cscript //nologo ospp.vbs /dstatus
cmd /c pause
