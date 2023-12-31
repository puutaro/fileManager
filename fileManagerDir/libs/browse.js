

function execBrowse(
	DISABLE_LAUNCH_URL = ""
){
	jsUbuntu.boot();
	saveArgsTsv(DISABLE_LAUNCH_URL);
	jsUbuntu.execScriptByBackground(
		"${FILE_MANAGER_BROWSE_SHELL_PATH}",
		"",
		1,
	);
};

function saveArgsTsv(
	DISABLE_LAUNCH_URL
){
	const ROOT_DIR_PATH = makeRootDirPath();
	const URL_DIR_PATH = makeDirPath(
		ROOT_DIR_PATH,
		`${DIR_PATH_LIST}`,
	);
	const argsCon = [
		`IPV4_ADDRESS\t${jsNetTool.getIpv4()}`,
		`ROOT_DIR_PATH\t${ROOT_DIR_PATH}`,
		`DISABLE_LAUNCH_URL\t${DISABLE_LAUNCH_URL}`,
		`URL_DIR_PATH\t${URL_DIR_PATH}`,
	].join("\n");
	jsFileSystem.writeLocalFile(
		"${FILE_MANAGE_ARGS_TSV_PATH}",
		argsCon
	);
};


