import React from 'react';
import { Card } from '@/components/ui/card';

// supports_autocomplete_FIM (suffix) // we will just do a description of FIM if it doens't support <|fim_hole|>
// system_message_type: 'system' | 'developer' (openai) | null // if null, we will just do a string of system message
// supports_tools: boolean // we will just do a string of tool use if it doesn't support

// supports_streaming: boolean // (o1 does NOT) we will just dump the final result if doesn't support it
// max_tokens: number // required, DEFAULT is Infinity


type DataType = {
  provider: string,
  model: string,
  country: string,
  isOSS: boolean,
  isSota: boolean,

  // developer
  supportsStreaming: boolean,
  supportsSystemMessage: 'separateField' | 'partOfMessage' | false,
  supportsTools: boolean,
  supportsAutocompleteFIM: boolean,
  paramaterSize: string,
  context: string,
  note: string,

}


// SEE MODELS PART OF void/ REPO FOR THESE SPECS:

const chatData: DataType[] = [
  {
    provider: 'Anthropic',
    model: 'Claude 3.5',
    country: '',
    isOSS: false,
    isSota: true,
    supportsStreaming: true,
    supportsSystemMessage: 'separateField',
    supportsTools: true,
    supportsAutocompleteFIM: false,
    paramaterSize: '',
    context: '',
    note: '',
  },
  {
    provider: 'OpenAI',
    model: 'GPT 4o',
    country: '',
    isOSS: false,
    isSota: true,
    supportsStreaming: true,
    supportsSystemMessage: 'partOfMessage',
    supportsTools: true,
    supportsAutocompleteFIM: true,
    paramaterSize: '',
    context: '',
    note: '',
  },
  {
    provider: 'Meta',
    model: 'Llama 3.x',
    country: '',
    isOSS: true,
    isSota: false,
    supportsStreaming: true,
    supportsSystemMessage: 'separateField',
    supportsTools: true,
    supportsAutocompleteFIM: false,
    paramaterSize: '',
    context: '',
    note: '',
  },
  {
    provider: 'xAI',
    model: 'Grok',
    country: '',
    isOSS: false,
    isSota: false,
    supportsStreaming: true,
    supportsSystemMessage: 'partOfMessage',
    supportsTools: true,
    supportsAutocompleteFIM: false,
    paramaterSize: '',
    context: '',
    note: '',
  },
  {
    provider: 'Google',
    model: 'Gemini 2.0 Flash',
    country: '',
    isOSS: false,
    isSota: false,
    supportsStreaming: true,
    supportsSystemMessage: false,
    supportsTools: true,
    supportsAutocompleteFIM: true,
    paramaterSize: '',
    context: '2M context',
    note: '',
  },
  {
    provider: 'Google',
    model: 'Gemini 1.5 Pro',
    country: '',
    isOSS: false,
    isSota: false,
    supportsStreaming: true,
    supportsSystemMessage: false,
    supportsTools: true,
    supportsAutocompleteFIM: true,
    paramaterSize: '',
    context: '1M context',
    note: '',
  },
  {
    provider: 'Google',
    model: 'Gemma 2',
    country: '',
    isOSS: true,
    isSota: false,
    supportsStreaming: true,
    supportsSystemMessage: false,
    supportsTools: false,
    supportsAutocompleteFIM: true,
    paramaterSize: '',
    context: '',
    note: '',
  },
  {
    provider: 'Microsoft',
    model: 'Phi4',
    country: '',
    isOSS: true,
    isSota: false,
    supportsStreaming: true,
    supportsSystemMessage: 'partOfMessage',
    supportsTools: false,
    supportsAutocompleteFIM: false,
    paramaterSize: '14B',
    context: '',
    note: 'Smartest model at this small size.',
  },
];


const codingData: DataType[] = [
  {
    provider: 'Alibaba',
    model: 'Phi4',
    country: 'China',
    isOSS: true,
    isSota: false,
    supportsStreaming: true,
    supportsSystemMessage: 'partOfMessage',
    supportsTools: false,
    supportsAutocompleteFIM: false,
    paramaterSize: '',
    context: '',
    note: '',
  },
  {
    provider: 'DeepSeek',
    model: 'Phi4',
    country: 'China',
    isOSS: true,
    isSota: false,
    supportsStreaming: true,
    supportsSystemMessage: 'partOfMessage',
    supportsTools: false,
    supportsAutocompleteFIM: false,
    paramaterSize: '',
    context: '',
    note: '',
  },
  {
    provider: 'Mistral',
    model: 'Phi4',
    country: 'France',
    isOSS: true,
    isSota: false,
    supportsStreaming: true,
    supportsSystemMessage: 'partOfMessage',
    supportsTools: false,
    supportsAutocompleteFIM: false,
    paramaterSize: '',
    context: '',
    note: '',
  },
  {
    provider: 'HuggingFace',
    model: 'Phi4',
    country: '',
    isOSS: true,
    isSota: false,
    supportsStreaming: true,
    supportsSystemMessage: 'partOfMessage',
    supportsTools: false,
    supportsAutocompleteFIM: false,
    paramaterSize: '',
    context: '',
    note: '',
  },
  {
    provider: 'Google',
    model: 'CodeGemma',
    country: '',
    isOSS: true,
    isSota: false,
    supportsStreaming: true,
    supportsSystemMessage: 'partOfMessage',
    supportsTools: false,
    supportsAutocompleteFIM: false,
    paramaterSize: '',
    context: '',
    note: '',
  },
]

const thinkingData: DataType[] = [
  {
    provider: 'Google',
    model: 'CodeGemma',
    country: '',
    isOSS: true,
    isSota: false,
    supportsStreaming: true,
    supportsSystemMessage: 'partOfMessage',
    supportsTools: false,
    supportsAutocompleteFIM: false,
    paramaterSize: '',
    context: '',
    note: '',
  },
]


type ModelType = 'chat' | 'thinking' | 'coding'

const modelData = (modelType: ModelType) => {
  if (modelType === 'chat') return chatData
  if (modelType === 'coding') return codingData
  if (modelType === 'thinking') return thinkingData
  return []

}
const ModernTable = ({ modelType }: { modelType: ModelType }) => {

  const data = modelData(modelType)

  return (<div className='flex justify-center'>
    <div className="w-[100vw] p-4 max-w-6xl not-prose">
      <Card className="overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-none">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] overflow-auto">
            <thead>
              <tr className="bg-gradient-to-r from-blue-100/80 via-purple-100/80 to-pink-100/80">
                <th className="text-left px-4 py-3 font-semibold text-gray-800">Provider</th>
                <th className="text-right px-4 py-3 font-semibold text-gray-800">Model</th>
                {/* <th className="text-center px-4 py-3 font-semibold text-gray-800">Country</th> */}
                <th className="text-center px-4 py-3 font-semibold text-gray-800">Capabilities</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-800">Context</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-800">Size</th>
                {/* <th className="text-center px-4 py-3 font-semibold text-gray-800">Pro Plan</th> */}
                <th className="text-left px-4 py-3 font-semibold text-gray-800">Notes</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                // one row at a time
                <tr key={idx}>

                  {/* provider */}
                  <td className="px-4 py-3 text-gray-600">
                    {row.provider}
                  </td>

                  {/* model */}
                  <td className="px-4 py-3 text-gray-600 relative w-40 ">
                    <div className="font-medium text-right">{row.model}</div>
                    <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
                    {row.isOSS && (
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                    )}
                  </td>

                  {/* country */}
                  {/* <td className="px-2 py-3 text-center text-gray-600">
                    {row.country && (
                      <span className="inline-flex items-center justify-center text-xs font-medium text-gray-500 w-7 h-5 rounded border border-gray-200">
                        {row.country}
                      </span>
                    )}
                  </td> */}

                  {/*  capabilities */}
                  <td className="px-2 py-3 text-center text-gray-600">
                    <div className="flex items-center justify-center gap-1">
                      {row.isSota && (
                        <div className="relative w-5 h-5">
                          <div className="absolute inset-0 rounded-full " />
                          <div className="absolute inset-0 flex items-center justify-center text-blue-500 text-xs font-medium leading-none">
                            ⭐️
                          </div>
                        </div>
                      )}
                      {row.supportsAutocompleteFIM && (
                        <div className="relative w-5 h-5">
                          <div className="absolute inset-0 rounded-full border-2 border-purple-400" />
                          <div className="absolute inset-0 flex items-center justify-center text-purple-500 text-xs font-medium leading-none">
                            A
                          </div>
                        </div>
                      )}
                      {row.supportsTools && (
                        <div className="relative w-5 h-5">
                          <div className="absolute inset-0 rounded-full border-2 border-orange-400" />
                          <div className="absolute inset-0 flex items-center justify-center text-orange-500 text-xs font-medium leading-none">
                            T
                          </div>
                        </div>
                      )}
                    </div>
                  </td>


                  <td className="px-4 py-3 text-gray-600">
                    {row.context && (
                      <span className="text-gray-400 text-sm">
                        {row.context}
                      </span>
                    )}
                  </td>

                  <td className="px-4 py-3 text-gray-600">
                    {row.paramaterSize && (
                      <span className="text-gray-400 text-sm">
                        {row.paramaterSize}
                      </span>
                    )}
                  </td>

                  <td className="px-4 py-3 text-gray-600">
                    {row.note && (
                      <span className="text-gray-400 text-sm">
                        * {row.note}
                      </span>
                    )}
                  </td>

                </tr>

              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  </div>);
};

export default ModernTable;