import React from 'react'
import JoditEditor from 'jodit-react';
import { useState, useRef, useMemo } from 'react';
import { toast } from 'react-toastify';

function TextEditor() {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const config = useMemo(
        () => ({
            readonly: false, // all options from https://xdsoft.net/jodit/docs/,
            placeholder: 'Start typings...',
            buttons: "bold,italic,underline,strikethrough,eraser,ul,ol,font,fontsize,paragraph,lineHeight,superscript,subscript,classSpan,spellcheck,cut,copy,paste,selectall"
        }),
        [content]
    );

    const saveContent = () => {
        if (content === '') {
            toast.error('Please write something to save')
            return
        }
        localStorage.setItem('content', content)
        toast.success('Content saved successfully')
    }
    return (
        <>
            <div className='w-1/2 mx-auto pt-[50px] pb-[50px]'>
                <JoditEditor
                    ref={editor}
                    value={localStorage.getItem('content') || content}
                    config={config}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={(newContent) => { }}
                />
                <button onClick={saveContent} type="submit" className="w-full bg-slate-500 hover:bg-slate-800 text-slate-100 font-bold py-2 px-4 rounded">Save</button>
            </div>

        </>
    )
}

export default TextEditor