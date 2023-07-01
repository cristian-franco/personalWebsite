"use strict";
exports.id = 747;
exports.ids = [747];
exports.modules = {

/***/ 6747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GB": () => (/* binding */ getPagesPath),
/* harmony export */   "JF": () => (/* binding */ getSinglePost),
/* harmony export */   "Td": () => (/* binding */ getPostsByCategory),
/* harmony export */   "gy": () => (/* binding */ getPostsByPage),
/* harmony export */   "no": () => (/* binding */ getRecentPosts),
/* harmony export */   "tG": () => (/* binding */ getAllCategories),
/* harmony export */   "vL": () => (/* binding */ getCategoryPaths),
/* harmony export */   "wy": () => (/* binding */ getPostsPath)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5629);




const LIMIT = 6;
// Get all post
const getAllPosts = ()=>{
    return fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), "src/posts"));
};
// get all posts slug
const getAllPostsSlug = ()=>{
    const files = getAllPosts();
    return files.map((filename)=>filename.replace(/\.(md|mdx)$/, "")
    );
};
// Get all posts data
const getAllPostsData = ()=>{
    const files = getAllPosts();
    const posts = files.map((filename)=>{
        const slug = filename.replace(/\.(md|mdx)$/, "");
        const markdownWithMeta = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), "src/posts", filename), "utf-8");
        const { data: frontmatter  } = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(markdownWithMeta);
        return {
            slug,
            ...frontmatter
        };
    });
    return posts.sort(___WEBPACK_IMPORTED_MODULE_3__/* .sortPostByDate */ .Ar);
};
// Get posts by page
const getPostsByPage = (page = 1, limit = 6)=>{
    const tempPosts = getAllPostsData();
    const posts = (0,___WEBPACK_IMPORTED_MODULE_3__/* .filterPostsByPage */ .E)(tempPosts, page, limit);
    return {
        posts,
        hasMore: limit * page < tempPosts.length
    };
};
// Get Page Paths
const getPagesPath = ()=>{
    const files = getAllPosts();
    const pages = Math.ceil(files.length / LIMIT);
    let paths = [];
    for(let i = 1; i <= pages; i++){
        paths.push({
            params: {
                slug: String(i)
            }
        });
    }
    return paths;
};
// Get all posts path (for nextjs getStaticPaths)
const getPostsPath = ()=>{
    const postsSlug = getAllPostsSlug();
    const paths = postsSlug.map((slug)=>{
        return {
            params: {
                slug
            }
        };
    });
    return paths;
};
// Get single post data
const getSinglePost = (slug)=>{
    const post = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), "src/posts", slug + ".md"), "utf-8");
    const { data: frontmatter , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(post);
    return {
        ...frontmatter,
        content
    };
};
// Get all Categories
const getAllCategories = ()=>{
    const posts = getAllPostsData();
    const categories = posts.map((post)=>post.category
    );
    return categories.flat();
};
// Get category paths (for nextjs getStaticPaths)
const getCategoryPaths = ()=>{
    const allPosts = getAllPostsData();
    const allCategories = getAllCategories();
    const categories = [
        ...new Set(allCategories)
    ];
    const paths = categories.map((category)=>{
        const filteredPosts = allPosts.filter((post)=>{
            const temp = post.category.map((cat)=>(0,___WEBPACK_IMPORTED_MODULE_3__/* .createSlug */ .qi)(cat)
            );
            return temp.includes(category.toLowerCase());
        });
        const pages = Math.ceil(filteredPosts.length / LIMIT);
        let tempPath = [];
        for(let i = 1; i <= pages; i++){
            tempPath.push({
                params: {
                    slug: category.toLowerCase(),
                    page: String(i)
                }
            });
        }
        return tempPath;
    });
    return paths.flat();
};
// Get all posts by category
const getPostsByCategory = (category, page = 1, limit = 6)=>{
    const allPosts = getAllPostsData();
    const filteredPosts = allPosts.filter((post)=>{
        const temp = post.category.map((cat)=>(0,___WEBPACK_IMPORTED_MODULE_3__/* .createSlug */ .qi)(cat)
        );
        return temp.includes(category);
    });
    const posts = (0,___WEBPACK_IMPORTED_MODULE_3__/* .filterPostsByPage */ .E)(filteredPosts, page, limit);
    return {
        posts,
        hasMore: limit * page < filteredPosts.length
    };
};
// Get recent posts
const getRecentPosts = ()=>{
    const allPosts = getAllPostsData();
    return allPosts.slice(0, 5);
};



/***/ })

};
;