import { visit } from 'unist-util-visit';

function escapeHtmlAttribute(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export const localEnhancedImages = () => {
  return (tree) => {
    visit(tree, 'image', (node) => {
      // For HTTP/HTTPS URLs, convert to regular HTML img tag
      if (node.url.startsWith('http://') || node.url.startsWith('https://')) {
        // node.type = 'html';
        // let imgHtml = `<img src="${node.url}"`;
        
        // if (node.alt) {
        //   imgHtml += ` alt="${escapeHtmlAttribute(node.alt)}"`;
        // }
        
        // if (node.title) {
        //   imgHtml += ` title="${escapeHtmlAttribute(node.title)}"`;
        // }
        
        // imgHtml += ` />`;
        // node.value = imgHtml;
        return;
      }
      
      // Use enhanced:img for local images
      const url = node.url.startsWith('./') || node.url.startsWith('../') || 
                  node.url.startsWith('$') || node.url.startsWith('@') ? 
                  node.url : `./${node.url}`;
                  
      node.type = 'html';
      let imgHtml = `<enhanced:img src="${url}"`;
      
      if (node.alt) {
        imgHtml += ` alt="${escapeHtmlAttribute(node.alt)}"`;
      }
      
      if (node.title) {
        imgHtml += ` title="${escapeHtmlAttribute(node.title)}"`;
      }
      
      imgHtml += ` />`;
      node.value = imgHtml;
    });
  };
};