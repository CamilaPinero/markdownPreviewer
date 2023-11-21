import { useState } from "react";
import { marked } from "marked";

marked.use({
	breaks: true,
	gfm: true,
});

export const MarkdownPreviewer = () => {
	const [content, setContent] = useState(
		`# Welcome to my React Markdown Previewer!\n## This is a sub-heading...\n### And here's some other cool stuff:\nHere's some code, \`<div></div>\`, between 2 backticks. \n \`\`\`
    // this is multi-line code:
    
    function anotherExample(firstLine, lastLine) {
      if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
        return multiLineCode;
      }
    } \n \`\`\` \n You can also make text **bold**... whoa! \n Or _italic_.\n Or... wait for it... **_both!_** \n And feel free to go crazy ~~crossing stuff out~~. \n There's also [links](https://www.freecodecamp.org), and \n >Block Quotes! 
    \n And of course there are lists. \n- Some are bulleted. \n - With different indentation levels. \n - That look like this. \n 1. And there are numbered lists too. \n 1. Use just 1s if you want! \n 1. And last but not least, let's not forget embedded images: 
    \n ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`
	);

	return (
		<div className="container">
			<h3>Text editor</h3>
			<div className="editor-box">
				<textarea
					name="editor"
					id="editor"
					cols="30"
					rows="10"
					value={content}
					onChange={(e) => setContent(e.target.value)}
				></textarea>
			</div>
			<h3>Preview</h3>
			<div className="preview-box">
				<div
					id="preview"
					dangerouslySetInnerHTML={{ __html: marked(content) }}
				></div>
			</div>
		</div>
	);
};
