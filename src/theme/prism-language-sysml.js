// TODO: 语法规则还不完善
Prism.languages.sysml = {
  keyword: {
    pattern:
      /\b(about|abstract|accept|action|actor|after|alias|all|allocate|allocation|analysis|and|as|assert|assign|assume|at|attribute|bind|binding|by|calc|case|comment|concern|connect|connection|constraint|decide|def|default|defined|dependency|derived|do|doc|else|end|entry|enum|event|exhibit|exit|expose|false|feature|filter|first|flow|for|fork|frame|from|hastype|if|implies|import|in|include|individual|inout|interface|istype|item|join|language|loop|merge|message|metadata|nonunique|not|null|objective|occurrence|of|or|ordered|out|package|parallel|part|perform|port|private|protected|public|readonly|redefines|ref|render|rendering|rep|require|requirement|return|satisfy|send|snapshot|specializes|stakeholder|state|subject|subsets|succession|then|timeslice|to|transition|true|until|use|variant|variation|verification|verify|via|view|viewpoint|when|while|xor)\b/,
  },
  string: {
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: true,
  },
  'quated-variables': {
    pattern: /('[^\\f\\n\\r\\t\\v\\\"\\\\]+?')"/,
  },
  operator: {
    pattern:
      /[(%|&|&&|\\?|\\?\\?|\\^|\\^\\^|\\||\\|\\|)(!|!=|\\<|\\<=|=|==|\\>|\\>=)(\\*|\\*\\*|\\+|\\-|/)(\\-\\>|\\.\\.|:|::|:=|:\\>|:\\>\\>|=\\>|@|~)]/,
  },
}
