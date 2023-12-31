
jsimport `${FILE_MANAGER_DIR_PATH_JS_PATH}`;


const COPY_URL = makeFMUrl();
jsUtil.copyToClipboard(
	COPY_URL,
	10
);
jsToast.short(`copy ok: ${COPY_URL}`);


function makeFMUrl(){
	const currentUrl = location.href;
	const copyUrlPrefix = makeFMUrlPrefix();
	if(
		currentUrl.startsWith(copyUrlPrefix)
	) return currentUrl;
	const ROOT_DIR_PATH = makeRootDirPath();
	const URL_DIR_PATH = makeDirPath(
		ROOT_DIR_PATH,
		`${DIR_PATH_LIST}`,
	);
	return `${copyUrlPrefix}/files${URL_DIR_PATH}`;
};

