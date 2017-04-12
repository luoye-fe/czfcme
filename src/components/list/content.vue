<template>
	<div class="content post-content" v-html="content" ref="content">

	</div>
</template>
<script>
import metaJSON from '../../metadata.js';
import showdown from 'showdown';

const converter = new showdown.Converter({
	tables: true,
	disableForced4SpacesIndentedSublists: true
});

export default {
	name: 'List-content',
	data() {
		return {
			metaJSON: metaJSON
		};
	},
	computed: {
		productionId: function() {
			return this.$route.query.id;
		},
		content: function() {
			if (this.productionId) {
				// 从 markdown 解析

				let cur = this.productionId.split('-');
				let content = '无内容';
				try {
					content = this.metaJSON[cur[0]].production[cur[1]]['content']
				} catch(e) {};
				return converter.makeHtml(content);
			} else {
				return `<p>无内容</p><a href="#/">返回首页</a>`;
			}
		}
	},
	watch: {
		productionId: {
			handler() {
				document.documentElement.scrollTop = 0
			}
		}
	}
};
</script>
<style lang="less">
.content {
	width: 700px;
	margin: 0 auto;
	box-sizing: border-box;
	padding: 10px 0;
}
@media screen and (max-width: 768px) {
	.content {
		width: 86%;
		margin: 0 auto;
	}
}

.content {
    h2, h3, h4, h5, h6 {
        position: relative;
        margin: 1em 0;
        &:before {
            content: "#";
            color: #42b983;
            position: absolute;
            left: -0.7em;
            top: -4px;
            font-size: 1.2em;
            font-weight: bold;
        }
    }
    h4, h5, h6 {
        &:before {
            content: "";
        }
    }

    h2, h3 {
        font-size: 22px;
    }

    h4, h5 {
        font-size: 18px;
    }
    h6 {
        font-size: 16px;
    }
    ul {
		margin: 1rem 0;
		padding-left: 30px;
    }
    p {
		margin: 15px 0;
		display: block;
    }
    a {
        color: #42b983;
        word-break: break-all;
    }
    blockquote {
        margin: 2em 0;
        padding-left: 20px;
        border-left: 4px solid #42b983;
    }
    img {
        display: block;
        max-width: 100%;
        margin: 1em auto;
    }
    table,
    figure.highlight {
        box-shadow: 0 1px 2px rgba(0,0,0,0.125);
    }
    .tip {
        position: relative;
        margin: 2em 0;
        padding: 12px 24px 12px 30px;
        border-left: 4px solid #f66;
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
        background-color: #f8f8f8;
        br {
            display: none;
        }
    }
    .tip:before {
        position: absolute;
        top: 14px;
        left: -12px;
        content: "!";
        width: 20px;
        height: 20px;
        border-radius: 100%;
        color: #fff;
        font-size: 14px;
        line-height: 20px;
        font-weight: bold;
        text-align: center;
        background-color: #f66;
        font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
    }
}

pre {
    color: #525252;
    .function .keyword,
    .constant {
       color: #0092db;
    }
    .keyword,
    .attribute {
        color: #e96900;
    }
    .number,
    .literal {
        color: #ae81ff;
    }
    .tag,
    .tag .title,
    .change,
    .winutils,
    .flow,
    .lisp .title,
    .clojure .built_in,
    .nginx .title,
    .tex .special {
        color: #2973b7;
    }
    .symbol,
    .symbol .string,
    .value,
    .regexp {
        color: #42b983;
    }
    .title {
        color: #83B917;
    }
    .tag .value,
    .string,
    .subst,
    .haskell .type,
    .preprocessor,
    .ruby .class .parent,
    .built_in,
    .sql .aggregate,
    .django .template_tag,
    .django .variable,
    .smalltalk .class,
    .javadoc,
    .django .filter .argument,
    .smalltalk .localvars,
    .smalltalk .array,
    .attr_selector,
    .pseudo,
    .addition,
    .stream,
    .envvar,
    .apache .tag,
    .apache .cbracket,
    .tex .command,
    .prompt {
        color: #42b983;
    }
    .comment,
    .java .annotation,
    .python .decorator,
    .template_comment,
    .pi,
    .doctype,
    .shebang,
    .apache .sqbracket,
    .tex .formula {
        color: #b3b3b3;
    }
    .deletion {
        color: #BA4545;
    }
    .coffeescript .javascript,
    .javascript .xml,
    .tex .formula,
    .xml .javascript,
    .xml .vbscript,
    .xml .css,
    .xml .cdata {
        opacity: 0.5;
    }
}

table {
    max-width: 100%;
    margin: 1em auto;
	border-collapse: collapse;
	border-spacing: 0;
	overflow-y: auto;
	display: inline-block;
    thead {
        background-color: #ddd;
        th {
            padding: 5px;
            min-width: 80px;
            border-right: 1px solid #000;
            border-bottom: 1px solid #000;
        }
        th:last-child {
        	border-right: none;
        }
    }
    tbody {
        tr:nth-child(2n) {
            background-color: #eee;
        }
        td {
            padding: 5px;
            text-align: center;
            vertical-align: text-top;
            border-right: 1px solid #000;
        }
        td:last-child {
        	border-right: none;
        }
    }
}
</style>
