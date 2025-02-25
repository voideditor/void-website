import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'


const BigCode: React.FC<{ children: React.ReactNode }> = ({ children: _children, ...props }) => {

    // make sure children are a string
    if (typeof _children !== 'string') {
        throw new Error('BigCode children must be a string.');
    }

    // trim lines
    let children = _children.trim()

    // find if the children starts with "npm"
    const isShell = children.startsWith('npm');

    // set the language; default tsx
    const language = isShell ? 'bash' : 'tsx';

    return (
        <SyntaxHighlighter
            language={language}
            style={vscDarkPlus}
            className='text-[13px] rounded-lg max-w-2xl mx-auto w-full'
        >
            {children}
        </SyntaxHighlighter>

    );

}


export default BigCode;