module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/obrazky')

    eleventyConfig.addWatchTarget('dist/*.css')
    eleventyConfig.setBrowserSyncConfig({
        files: ['dist/*.css'],
    })

    return {
        dir: {
            input: 'src',
            output: 'dist',
            includes: 'casti',
            data: 'data',
            layouts: 'layouty',
            passthroughFileCopy: true,
            templateFormats: ['html', 'njk', 'md'],
            htmlTemplateEngine: 'njk',
            markdownTemplateEngine: 'njk',
        },
    }
}
