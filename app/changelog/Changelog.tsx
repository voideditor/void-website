'use client'

import { Fragment, useState } from "react";

interface ChangelogEntry {
  name: string;
  version?: string,
  date?: string;
  changes: string[];
  className?: string;
}


const CURRENT_DATE = new Date();

const CHANGELOG_ENTRIES: ChangelogEntry[] = [

  // {
  //   name: "At some point",
  //   date: "March 20, 2025",
  //   changes: [
  //     `The future of coding is hard to predict, but we think there are three aspects that will remain the same regardless of model intelligence.`,
  //     `1. People will use AI to locate code`,
  //     `2. People will use AI to edit code`,
  //     `3. People will valide the changes that AI makes.`,
  //     `People only care about 1. what the state of the program is, 2. where the state is used, 3. and where it changes. Allow AI to trace through all three of these. Eg. data structure X created here, it is passed in here, it changes here, it is passed in again here, it is set here, etc. Do this for the full top-to-bottom trace.`,
  //     `Allow AI to trace through deeply nested function calls and summarize what is happening.`,
  //     `Current tools like Copilot and Cursor help with editing code, but (largely) not locating it or validating it. Here are some ideas on solving this`,
  //     `AI traces Finetune models to group code by feature, eg. "Here is the code for authentication". One can imagine breaking any program into fewer than ~100 features that any human can understand.`,
  //     `Allow AI to write test cases and iterate until all of them pass.`,
  //     `One can generalize this to an AI that can iterate on higher-level test cases, like "create a good looking website".`,
  //     `(this is the feature idea, but used to describe changes) As AI makes larger code changes, humans will need more efficient ways to understand those changes. One idea is to group all changes into high level categories like "auth changes" or "state changes", and map each category back to the sourcecode.`,
  //   ]
  // },


  {
    name: "Beta Patch #7",
    version: 'v1.4.1',
    date: "Jun 5, 2025",
    changes: [
      "Added MCP support!",
      "Added AI commit message generation.",
      "Edit tool now displays a visual diff instead of plaintext.",
      "Increased support for Claude 4, Azure, and Ollama.",
    ]
  },
  {
    name: "Beta Patch #6",
    version: 'v1.3.9',
    date: "May 14, 2025",
    changes: [
      "You can now configure a model's context length, thinking support, tool formatting, and more.",
      "New @file and @folder ability.",
      "New terminal tools for Agent mode. Agent can open persistent background terminals.",
      "Faster Fast-Apply by outputting Search/Replace blocks directly, instead of an intermediate change summary.",
      "CorteXIDE now runs on Linux.",
      "New onboarding screen with a focus on Gemini and OpenRouter.",
      "Context-window truncation works more consistently with small context windows.",
      "Added reasoning effort sliders on o3, Grok, and Gemini.",
      "Redesigned chat history pane and settings page.",
    ]
  },
  {
    name: "Beta Patch #5",
    version: 'v1.2.4',
    date: "April 16, 2025",
    changes: [
      "Added model onboarding on first launch.",
      "o3, o4-mini support.",
    ]
  },

  {
    name: "Beta Patch #4",
    version: 'v1.2.1',
    // className: 'opacity-50',
    date: "April 14, 2025",
    changes: [
      "Added checkpoints that let you jump between LLM edits.",
      "Agent mode can now fix lint errors after editing files.",
      "Upgraded tool-calling implementation; now, any model can run in Agent mode - R1, Gemma3, GPT 4.1, etc.",
      "Dynamic context squashing when the context window is not sufficiently large.",
      "Added SSH support and WSL support.",
      "CorteXIDE now comes with auto-updates, so we'll be pushing smaller and more frequent changes.",
      "Gemini 2.5 Pro, GPT 4.1 (Quasar Alpha), OpenHands LM, DeepSeek V3, and Phi4 support.",
    ]
  },
  {
    name: "Beta Patch #3",
    version: 'v1.0.3',
    // className: 'opacity-50',
    date: "April 7, 2025",
    changes: [
      "Experimental version of CorteXIDE pushed to our Discord members.",
      "Initial version of the next patch.",
    ]
  },
  {
    name: "Beta Patch #2",
    version: 'v1.0.2',
    date: "March 22, 2025",
    changes: [
      "Added Agent mode, Gather mode, and Chat mode.",
      "Agent mode can control your terminal, read/write files, and search your codebase.",
      "Chat and Gather mode now make suggestions to edit specific files.",
      "CorteXIDE auto-detects when a model supports tools (Agent/Gather), FIM (Autocomplete), and thinking (Reasoning).",
      "New slider to set a model's reasoning level preference.",
      "Autocomplete has been re-enabled, and you can use it with any FIM model.",
      "Added a Fast Apply option, enabled by default.",
      "Chat mode now creates links to symbols in your code.",
      "Rebase from VSCode 1.99.0.",
      "Claude 3.7, Deepseek V3, Gemini 2.0, and QwQ support.",
    ]
  },
  {
    name: "Beta Patch #1",
    version: 'v1.0.1',
    date: "January 23, 2025",
    changes: [
      "New default theme.",
      "Add support for DeepSeek.",
      "Fixed system prompt errors when using o1 and Gemini.",
      "Improved prompts for Apply and Quick Edit.",
      "Performance improvements for chat.",
      "Temporarily disable autocomplete (needs better model selection guardrails).",
      "Minor updates to the diff streaming algorithm and FIM output parsing algorithm.",
    ]
  },

  {
    name: "Beta Release",
    version: 'v1.0.0',
    date: "January 19, 2025",
    changes: [
      "Added quick edits (Ctrl+K)! This includes FIM-prompting, output parsing, and history management.",
      "Added autocomplete!",
      "CorteXIDE now lives natively in the VSCode codebase, no more extension API.",
      "Added new UI to smoothly show the LLM's streamed changes in VSCode.",
      "New settings page with one-click switch, model selection, and even more providers.",
      "Added auto-detection of Ollama models by default.",
      "Fixed CORS and CSP errors for many local models by originating LLM calls from 'node/' with IPC.",
      "Native UI for Accept/Reject buttons, streaming, and interruptions.",
      "File suggestions in the chat based on history.",
      "Switched from the MIT License to the Apache 2.0 License for a little more protection on our OSS initiative.",
    ]
  },

  {
    name: "Early Launch",
    date: "October 1, 2024",
    changes: [
      "Initialized CorteXIDE's website and GitHub repo.",
      "A lot of early setup work not recorded in this changelog.",
      "Basic features like LLM streaming in the editor, custom history, custom editor UI.",
      "Users could build CorteXIDE for an early version of Ctrl+L and (Slow) Apply.",
    ]
  }
];

const isFutureDate = (dateStr?: string) => {
  if (!dateStr) return false;
  const date = new Date(dateStr);
  // Set both dates to start of day for accurate comparison
  const compareDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const currentDate = new Date(CURRENT_DATE.getFullYear(), CURRENT_DATE.getMonth(), CURRENT_DATE.getDate());
  return compareDate > currentDate;
};


const ChangelogEntry = ({ name, date, version, changes, className }: ChangelogEntry) => {
  return (
    <div className={`md:grid md:grid-cols-[170px_1fr] gap-4 md:gap-8 transition-all duration-300 ${className}`}>
      <div className="text-gray-500 md:text-right md:pr-8 pt-0.5 md:border-r border-gray-200 mb-2 md:mb-0">
        {date}
      </div>
      <div className="relative">
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold">{name}</h2>
          </div>
          {!!version && <div className="text-gray-500 text-sm ">
            {version}
          </div>}
        </div>

        <ul className="space-y-3 text-gray-600 text-sm">
          {changes.map((change, index) => {
            return (<li key={index} className={`list-disc list-outside ml-5 break-words`}>
              {change}
            </li>);
          })}
        </ul>
      </div>
    </div>
  );
};

const Changelog = () => {

  const changes = CHANGELOG_ENTRIES.map((entry, i) => (
    <Fragment key={i}>
      <ChangelogEntry
        {...entry}
      />
    </Fragment>
  ))

  return (
    <div className="min-h-screen ">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-20 pb-32">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Changelog</h1>
        <p className="text-lg md:text-lg text-gray-600 mb-8">All major updates and releases.</p>
        <div className="space-y-16">
          {changes}
        </div>
      </div>
    </div>
  );
}

export default Changelog