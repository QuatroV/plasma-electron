// Generated from ./asmMASM/asmMASM.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
  ATN,
  ATNDeserializer,
  DecisionState,
  DFA,
  FailedPredicateException,
  RecognitionException,
  NoViableAltException,
  BailErrorStrategy,
  Parser,
  ParserATNSimulator,
  RuleContext,
  ParserRuleContext,
  PredictionMode,
  PredictionContextCache,
  TerminalNode,
  RuleNode,
  Token,
  TokenStream,
  Interval,
  IntervalSet,
} from "antlr4";
import asmMASMListener from "./asmMASMListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class asmMASMParser extends Parser {
  public static readonly T__0 = 1;
  public static readonly T__1 = 2;
  public static readonly T__2 = 3;
  public static readonly T__3 = 4;
  public static readonly T__4 = 5;
  public static readonly T__5 = 6;
  public static readonly T__6 = 7;
  public static readonly T__7 = 8;
  public static readonly ORG = 9;
  public static readonly END = 10;
  public static readonly ENDIF = 11;
  public static readonly IF = 12;
  public static readonly EQU = 13;
  public static readonly DW = 14;
  public static readonly DB = 15;
  public static readonly DM = 16;
  public static readonly DS = 17;
  public static readonly INCLUDE = 18;
  public static readonly INCLUDELIB = 19;
  public static readonly INVOKE = 20;
  public static readonly OPTION = 21;
  public static readonly PUT = 22;
  public static readonly NOT = 23;
  public static readonly REGISTER = 24;
  public static readonly OPCODE = 25;
  public static readonly REP = 26;
  public static readonly ASSIGN = 27;
  public static readonly OFFSET = 28;
  public static readonly DOLLAR = 29;
  public static readonly QUES = 30;
  public static readonly SEGMENT = 31;
  public static readonly SEGMENTEND = 32;
  public static readonly GROUP = 33;
  public static readonly BYTE = 34;
  public static readonly SBYTE = 35;
  public static readonly WORD = 36;
  public static readonly DWORD = 37;
  public static readonly PARA = 38;
  public static readonly PAGE = 39;
  public static readonly ALIGN = 40;
  public static readonly LABEL = 41;
  public static readonly DUP = 42;
  public static readonly ASSUME = 43;
  public static readonly SIGN = 44;
  public static readonly EXTERN = 45;
  public static readonly PUBLIC = 46;
  public static readonly MASMDIRECTIVE = 47;
  public static readonly NAME = 48;
  public static readonly NUMBER = 49;
  public static readonly STRING1 = 50;
  public static readonly STRING2 = 51;
  public static readonly COMMENT = 52;
  public static readonly EOL = 53;
  public static readonly WS = 54;
  public static readonly EOF = Token.EOF;
  public static readonly RULE_prog = 0;
  public static readonly RULE_line = 1;
  public static readonly RULE_instruction = 2;
  public static readonly RULE_lbl = 3;
  public static readonly RULE_endlbl = 4;
  public static readonly RULE_assemblerdirective = 5;
  public static readonly RULE_masmdirectives = 6;
  public static readonly RULE_masmdirective = 7;
  public static readonly RULE_assume = 8;
  public static readonly RULE_label_ = 9;
  public static readonly RULE_type_ = 10;
  public static readonly RULE_group = 11;
  public static readonly RULE_segment = 12;
  public static readonly RULE_endsegment = 13;
  public static readonly RULE_align = 14;
  public static readonly RULE_assign = 15;
  public static readonly RULE_put = 16;
  public static readonly RULE_include = 17;
  public static readonly RULE_includelib = 18;
  public static readonly RULE_invoke = 19;
  public static readonly RULE_option = 20;
  public static readonly RULE_ds = 21;
  public static readonly RULE_dw = 22;
  public static readonly RULE_db = 23;
  public static readonly RULE_dm = 24;
  public static readonly RULE_dup = 25;
  public static readonly RULE_equ = 26;
  public static readonly RULE_extern_ = 27;
  public static readonly RULE_public_ = 28;
  public static readonly RULE_if_ = 29;
  public static readonly RULE_endif_ = 30;
  public static readonly RULE_org = 31;
  public static readonly RULE_expressionlist = 32;
  public static readonly RULE_label = 33;
  public static readonly RULE_expression = 34;
  public static readonly RULE_multiplyingExpression = 35;
  public static readonly RULE_argument = 36;
  public static readonly RULE_gross = 37;
  public static readonly RULE_grossrawassemblerdirective = 38;
  public static readonly RULE_dollar = 39;
  public static readonly RULE_ques = 40;
  public static readonly RULE_register_ = 41;
  public static readonly RULE_string = 42;
  public static readonly RULE_name = 43;
  public static readonly RULE_number = 44;
  public static readonly RULE_opcode = 45;
  public static readonly RULE_rep = 46;
  public static readonly literalNames: (string | null)[] = [
    null,
    "':'",
    "','",
    "'('",
    "')'",
    "'*'",
    "'/'",
    "'['",
    "']'",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "'='",
    null,
    "'$'",
    "'?'",
  ];
  public static readonly symbolicNames: (string | null)[] = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "ORG",
    "END",
    "ENDIF",
    "IF",
    "EQU",
    "DW",
    "DB",
    "DM",
    "DS",
    "INCLUDE",
    "INCLUDELIB",
    "INVOKE",
    "OPTION",
    "PUT",
    "NOT",
    "REGISTER",
    "OPCODE",
    "REP",
    "ASSIGN",
    "OFFSET",
    "DOLLAR",
    "QUES",
    "SEGMENT",
    "SEGMENTEND",
    "GROUP",
    "BYTE",
    "SBYTE",
    "WORD",
    "DWORD",
    "PARA",
    "PAGE",
    "ALIGN",
    "LABEL",
    "DUP",
    "ASSUME",
    "SIGN",
    "EXTERN",
    "PUBLIC",
    "MASMDIRECTIVE",
    "NAME",
    "NUMBER",
    "STRING1",
    "STRING2",
    "COMMENT",
    "EOL",
    "WS",
  ];
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    "prog",
    "line",
    "instruction",
    "lbl",
    "endlbl",
    "assemblerdirective",
    "masmdirectives",
    "masmdirective",
    "assume",
    "label_",
    "type_",
    "group",
    "segment",
    "endsegment",
    "align",
    "assign",
    "put",
    "include",
    "includelib",
    "invoke",
    "option",
    "ds",
    "dw",
    "db",
    "dm",
    "dup",
    "equ",
    "extern_",
    "public_",
    "if_",
    "endif_",
    "org",
    "expressionlist",
    "label",
    "expression",
    "multiplyingExpression",
    "argument",
    "gross",
    "grossrawassemblerdirective",
    "dollar",
    "ques",
    "register_",
    "string",
    "name",
    "number",
    "opcode",
    "rep",
  ];
  public get grammarFileName(): string {
    return "asmMASM.g4";
  }
  public get literalNames(): (string | null)[] {
    return asmMASMParser.literalNames;
  }
  public get symbolicNames(): (string | null)[] {
    return asmMASMParser.symbolicNames;
  }
  public get ruleNames(): string[] {
    return asmMASMParser.ruleNames;
  }
  public get serializedATN(): number[] {
    return asmMASMParser._serializedATN;
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message);
  }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(
      this,
      asmMASMParser._ATN,
      asmMASMParser.DecisionsToDFA,
      new PredictionContextCache()
    );
  }
  // @RuleVersion(0)
  public prog(): ProgContext {
    let localctx: ProgContext = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, asmMASMParser.RULE_prog);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 97;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          ((_la & ~0x1f) === 0 && ((1 << _la) & 109051392) !== 0) ||
          (((_la - 34) & ~0x1f) === 0 && ((1 << (_la - 34)) & 555535) !== 0)
        ) {
          {
            {
              this.state = 94;
              this.line();
            }
          }
          this.state = 99;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 100;
        this.match(asmMASMParser.EOF);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public line(): LineContext {
    let localctx: LineContext = new LineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, asmMASMParser.RULE_line);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 104;
        this._errHandler.sync(this);
        switch (this._interp.adaptivePredict(this._input, 1, this._ctx)) {
          case 1:
            {
              this.state = 102;
              this.lbl();
            }
            break;
          case 2:
            {
              this.state = 103;
              this.endlbl();
            }
            break;
        }
        this.state = 109;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 9:
          case 11:
          case 12:
          case 13:
          case 14:
          case 15:
          case 16:
          case 17:
          case 18:
          case 19:
          case 20:
          case 21:
          case 22:
          case 34:
          case 35:
          case 36:
          case 37:
          case 43:
          case 45:
          case 46:
          case 48:
            {
              this.state = 106;
              this.assemblerdirective();
            }
            break;
          case 47:
            {
              this.state = 107;
              this.masmdirectives();
            }
            break;
          case 25:
          case 26:
            {
              this.state = 108;
              this.instruction();
            }
            break;
          case 53:
            break;
          default:
            break;
        }
        this.state = 111;
        this.match(asmMASMParser.EOL);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public instruction(): InstructionContext {
    let localctx: InstructionContext = new InstructionContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 4, asmMASMParser.RULE_instruction);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 114;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 26) {
          {
            this.state = 113;
            this.rep();
          }
        }

        this.state = 116;
        this.opcode();
        this.state = 118;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 && ((1 << _la) & 1941977736) !== 0) ||
          (((_la - 44) & ~0x1f) === 0 && ((1 << (_la - 44)) & 241) !== 0)
        ) {
          {
            this.state = 117;
            this.expressionlist();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public lbl(): LblContext {
    let localctx: LblContext = new LblContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, asmMASMParser.RULE_lbl);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 120;
        this.label();
        this.state = 122;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 1) {
          {
            this.state = 121;
            this.match(asmMASMParser.T__0);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public endlbl(): EndlblContext {
    let localctx: EndlblContext = new EndlblContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 8, asmMASMParser.RULE_endlbl);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 124;
        this.match(asmMASMParser.END);
        this.state = 126;
        this._errHandler.sync(this);
        switch (this._interp.adaptivePredict(this._input, 6, this._ctx)) {
          case 1:
            {
              this.state = 125;
              this.name();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public assemblerdirective(): AssemblerdirectiveContext {
    let localctx: AssemblerdirectiveContext = new AssemblerdirectiveContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 10, asmMASMParser.RULE_assemblerdirective);
    let _la: number;
    try {
      this.state = 155;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 8, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 128;
            this.org();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 129;
            this.if_();
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 130;
            this.endif_();
          }
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 131;
            this.equ();
          }
          break;
        case 5:
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 132;
            this.db();
          }
          break;
        case 6:
          this.enterOuterAlt(localctx, 6);
          {
            this.state = 133;
            this.dw();
          }
          break;
        case 7:
          this.enterOuterAlt(localctx, 7);
          {
            this.state = 134;
            this.dm();
          }
          break;
        case 8:
          this.enterOuterAlt(localctx, 8);
          {
            this.state = 135;
            this.ds();
          }
          break;
        case 9:
          this.enterOuterAlt(localctx, 9);
          {
            this.state = 136;
            this.include();
          }
          break;
        case 10:
          this.enterOuterAlt(localctx, 10);
          {
            this.state = 137;
            this.includelib();
          }
          break;
        case 11:
          this.enterOuterAlt(localctx, 11);
          {
            this.state = 138;
            this.invoke();
          }
          break;
        case 12:
          this.enterOuterAlt(localctx, 12);
          {
            this.state = 139;
            this.option();
          }
          break;
        case 13:
          this.enterOuterAlt(localctx, 13);
          {
            this.state = 140;
            this.put();
          }
          break;
        case 14:
          this.enterOuterAlt(localctx, 14);
          {
            this.state = 141;
            this.assign();
          }
          break;
        case 15:
          this.enterOuterAlt(localctx, 15);
          {
            this.state = 142;
            this.segment();
          }
          break;
        case 16:
          this.enterOuterAlt(localctx, 16);
          {
            this.state = 143;
            this.endsegment();
          }
          break;
        case 17:
          this.enterOuterAlt(localctx, 17);
          {
            this.state = 144;
            this.group();
          }
          break;
        case 18:
          this.enterOuterAlt(localctx, 18);
          {
            this.state = 145;
            this.label_();
          }
          break;
        case 19:
          this.enterOuterAlt(localctx, 19);
          {
            this.state = 146;
            this.assume();
          }
          break;
        case 20:
          this.enterOuterAlt(localctx, 20);
          {
            this.state = 147;
            this.extern_();
          }
          break;
        case 21:
          this.enterOuterAlt(localctx, 21);
          {
            this.state = 148;
            this.public_();
          }
          break;
        case 22:
          this.enterOuterAlt(localctx, 22);
          {
            this.state = 149;
            this.type_();
            this.state = 151;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
              {
                {
                  this.state = 150;
                  this.expressionlist();
                }
              }
              this.state = 153;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            } while (
              ((_la & ~0x1f) === 0 && ((1 << _la) & 1941977736) !== 0) ||
              (((_la - 44) & ~0x1f) === 0 && ((1 << (_la - 44)) & 241) !== 0)
            );
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public masmdirectives(): MasmdirectivesContext {
    let localctx: MasmdirectivesContext = new MasmdirectivesContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 12, asmMASMParser.RULE_masmdirectives);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 158;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 157;
              this.masmdirective();
            }
          }
          this.state = 160;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === 47);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public masmdirective(): MasmdirectiveContext {
    let localctx: MasmdirectiveContext = new MasmdirectiveContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 14, asmMASMParser.RULE_masmdirective);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 162;
        this.match(asmMASMParser.MASMDIRECTIVE);
        this.state = 164;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 && ((1 << _la) & 1941977736) !== 0) ||
          (((_la - 44) & ~0x1f) === 0 && ((1 << (_la - 44)) & 241) !== 0)
        ) {
          {
            this.state = 163;
            this.expressionlist();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public assume(): AssumeContext {
    let localctx: AssumeContext = new AssumeContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 16, asmMASMParser.RULE_assume);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 166;
        this.match(asmMASMParser.ASSUME);
        this.state = 167;
        this.register_();
        this.state = 168;
        this.match(asmMASMParser.T__0);
        this.state = 169;
        this.name();
        this.state = 177;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 2) {
          {
            {
              this.state = 170;
              this.match(asmMASMParser.T__1);
              this.state = 171;
              this.register_();
              this.state = 172;
              this.match(asmMASMParser.T__0);
              this.state = 173;
              this.name();
            }
          }
          this.state = 179;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public label_(): Label_Context {
    let localctx: Label_Context = new Label_Context(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 18, asmMASMParser.RULE_label_);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 180;
        this.name();
        this.state = 181;
        this.match(asmMASMParser.LABEL);
        this.state = 182;
        this.type_();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public type_(): Type_Context {
    let localctx: Type_Context = new Type_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 20, asmMASMParser.RULE_type_);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 184;
        _la = this._input.LA(1);
        if (!(((_la - 34) & ~0x1f) === 0 && ((1 << (_la - 34)) & 15) !== 0)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public group(): GroupContext {
    let localctx: GroupContext = new GroupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, asmMASMParser.RULE_group);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 186;
        this.name();
        this.state = 187;
        this.match(asmMASMParser.GROUP);
        this.state = 188;
        this.name();
        this.state = 193;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 2) {
          {
            {
              this.state = 189;
              this.match(asmMASMParser.T__1);
              this.state = 190;
              this.name();
            }
          }
          this.state = 195;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public segment(): SegmentContext {
    let localctx: SegmentContext = new SegmentContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 24, asmMASMParser.RULE_segment);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 196;
        this.name();
        this.state = 197;
        this.match(asmMASMParser.SEGMENT);
        this.state = 199;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (((_la - 34) & ~0x1f) === 0 && ((1 << (_la - 34)) & 125) !== 0) {
          {
            this.state = 198;
            this.align();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public endsegment(): EndsegmentContext {
    let localctx: EndsegmentContext = new EndsegmentContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 26, asmMASMParser.RULE_endsegment);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 201;
        this.name();
        this.state = 202;
        this.match(asmMASMParser.SEGMENTEND);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public align(): AlignContext {
    let localctx: AlignContext = new AlignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, asmMASMParser.RULE_align);
    try {
      this.state = 214;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 34:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 204;
            this.match(asmMASMParser.BYTE);
          }
          break;
        case 36:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 205;
            this.match(asmMASMParser.WORD);
          }
          break;
        case 37:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 206;
            this.match(asmMASMParser.DWORD);
          }
          break;
        case 38:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 207;
            this.match(asmMASMParser.PARA);
          }
          break;
        case 39:
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 208;
            this.match(asmMASMParser.PAGE);
          }
          break;
        case 40:
          this.enterOuterAlt(localctx, 6);
          {
            this.state = 209;
            this.match(asmMASMParser.ALIGN);
            this.state = 210;
            this.match(asmMASMParser.T__2);
            this.state = 211;
            this.number_();
            this.state = 212;
            this.match(asmMASMParser.T__3);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public assign(): AssignContext {
    let localctx: AssignContext = new AssignContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 30, asmMASMParser.RULE_assign);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 216;
        this.name();
        this.state = 217;
        this.match(asmMASMParser.ASSIGN);
        this.state = 218;
        this.expression();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public put(): PutContext {
    let localctx: PutContext = new PutContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, asmMASMParser.RULE_put);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 220;
        this.match(asmMASMParser.PUT);
        this.state = 221;
        this.expressionlist();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public include(): IncludeContext {
    let localctx: IncludeContext = new IncludeContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 34, asmMASMParser.RULE_include);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 223;
        this.match(asmMASMParser.INCLUDE);
        this.state = 224;
        this.expressionlist();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public includelib(): IncludelibContext {
    let localctx: IncludelibContext = new IncludelibContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 36, asmMASMParser.RULE_includelib);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 226;
        this.match(asmMASMParser.INCLUDELIB);
        this.state = 227;
        this.expressionlist();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public invoke(): InvokeContext {
    let localctx: InvokeContext = new InvokeContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 38, asmMASMParser.RULE_invoke);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 229;
        this.match(asmMASMParser.INVOKE);
        this.state = 230;
        this.expressionlist();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public option(): OptionContext {
    let localctx: OptionContext = new OptionContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 40, asmMASMParser.RULE_option);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 232;
        this.match(asmMASMParser.OPTION);
        this.state = 233;
        this.expressionlist();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public ds(): DsContext {
    let localctx: DsContext = new DsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, asmMASMParser.RULE_ds);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 235;
        this.match(asmMASMParser.DS);
        this.state = 236;
        this.expressionlist();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public dw(): DwContext {
    let localctx: DwContext = new DwContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, asmMASMParser.RULE_dw);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 238;
        this.match(asmMASMParser.DW);
        this.state = 239;
        this.expressionlist();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public db(): DbContext {
    let localctx: DbContext = new DbContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, asmMASMParser.RULE_db);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 241;
        this.match(asmMASMParser.DB);
        this.state = 242;
        this.expressionlist();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public dm(): DmContext {
    let localctx: DmContext = new DmContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, asmMASMParser.RULE_dm);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 244;
        this.match(asmMASMParser.DM);
        this.state = 245;
        this.expressionlist();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public dup(): DupContext {
    let localctx: DupContext = new DupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, asmMASMParser.RULE_dup);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 247;
        this.number_();
        this.state = 248;
        this.match(asmMASMParser.DUP);
        this.state = 249;
        this.expression();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public equ(): EquContext {
    let localctx: EquContext = new EquContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, asmMASMParser.RULE_equ);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 251;
        this.match(asmMASMParser.EQU);
        this.state = 252;
        this.expression();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public extern_(): Extern_Context {
    let localctx: Extern_Context = new Extern_Context(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 54, asmMASMParser.RULE_extern_);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 254;
        this.match(asmMASMParser.EXTERN);
        this.state = 255;
        this.expression();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public public_(): Public_Context {
    let localctx: Public_Context = new Public_Context(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 56, asmMASMParser.RULE_public_);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 257;
        this.match(asmMASMParser.PUBLIC);
        this.state = 258;
        this.expression();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public if_(): If_Context {
    let localctx: If_Context = new If_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 58, asmMASMParser.RULE_if_);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 260;
        this.match(asmMASMParser.IF);
        this.state = 261;
        this.expression();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public endif_(): Endif_Context {
    let localctx: Endif_Context = new Endif_Context(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 60, asmMASMParser.RULE_endif_);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 263;
        this.match(asmMASMParser.ENDIF);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public org(): OrgContext {
    let localctx: OrgContext = new OrgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, asmMASMParser.RULE_org);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 265;
        this.match(asmMASMParser.ORG);
        this.state = 266;
        this.expression();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public expressionlist(): ExpressionlistContext {
    let localctx: ExpressionlistContext = new ExpressionlistContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 64, asmMASMParser.RULE_expressionlist);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 268;
        this.expression();
        this.state = 273;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 2) {
          {
            {
              this.state = 269;
              this.match(asmMASMParser.T__1);
              this.state = 270;
              this.expression();
            }
          }
          this.state = 275;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public label(): LabelContext {
    let localctx: LabelContext = new LabelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, asmMASMParser.RULE_label);
    try {
      this.state = 278;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 48:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 276;
            this.name();
          }
          break;
        case 9:
        case 11:
        case 12:
        case 13:
        case 22:
        case 25:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 277;
            this.gross();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public expression(): ExpressionContext {
    let localctx: ExpressionContext = new ExpressionContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 68, asmMASMParser.RULE_expression);
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 280;
        this.multiplyingExpression();
        this.state = 285;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 281;
                this.match(asmMASMParser.SIGN);
                this.state = 282;
                this.multiplyingExpression();
              }
            }
          }
          this.state = 287;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public multiplyingExpression(): MultiplyingExpressionContext {
    let localctx: MultiplyingExpressionContext =
      new MultiplyingExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, asmMASMParser.RULE_multiplyingExpression);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 288;
        this.argument();
        this.state = 293;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 289;
                _la = this._input.LA(1);
                if (!(_la === 5 || _la === 6)) {
                  this._errHandler.recoverInline(this);
                } else {
                  this._errHandler.reportMatch(this);
                  this.consume();
                }
                this.state = 290;
                this.argument();
              }
            }
          }
          this.state = 295;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public argument(): ArgumentContext {
    let localctx: ArgumentContext = new ArgumentContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 72, asmMASMParser.RULE_argument);
    try {
      this.state = 321;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 20, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 296;
            this.number_();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 297;
            this.dollar();
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 298;
            this.ques();
          }
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 299;
            this.register_();
          }
          break;
        case 5:
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 303;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 19, this._ctx)) {
              case 1:
                {
                  this.state = 300;
                  this.name();
                  this.state = 301;
                  this.match(asmMASMParser.T__0);
                }
                break;
            }
            this.state = 305;
            this.name();
          }
          break;
        case 6:
          this.enterOuterAlt(localctx, 6);
          {
            this.state = 306;
            this.string_();
          }
          break;
        case 7:
          this.enterOuterAlt(localctx, 7);
          {
            this.state = 307;
            this.match(asmMASMParser.T__2);
            this.state = 308;
            this.expression();
            this.state = 309;
            this.match(asmMASMParser.T__3);
          }
          break;
        case 8:
          this.enterOuterAlt(localctx, 8);
          {
            this.state = 311;
            this.match(asmMASMParser.T__6);
            this.state = 312;
            this.expression();
            this.state = 313;
            this.match(asmMASMParser.T__7);
          }
          break;
        case 9:
          this.enterOuterAlt(localctx, 9);
          {
            this.state = 315;
            this.match(asmMASMParser.NOT);
            this.state = 316;
            this.expression();
          }
          break;
        case 10:
          this.enterOuterAlt(localctx, 10);
          {
            this.state = 317;
            this.match(asmMASMParser.OFFSET);
            this.state = 318;
            this.expression();
          }
          break;
        case 11:
          this.enterOuterAlt(localctx, 11);
          {
            this.state = 319;
            this.gross();
          }
          break;
        case 12:
          this.enterOuterAlt(localctx, 12);
          {
            this.state = 320;
            this.dup();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public gross(): GrossContext {
    let localctx: GrossContext = new GrossContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, asmMASMParser.RULE_gross);
    try {
      this.state = 325;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 25:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 323;
            this.opcode();
          }
          break;
        case 9:
        case 11:
        case 12:
        case 13:
        case 22:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 324;
            this.grossrawassemblerdirective();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public grossrawassemblerdirective(): GrossrawassemblerdirectiveContext {
    let localctx: GrossrawassemblerdirectiveContext =
      new GrossrawassemblerdirectiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, asmMASMParser.RULE_grossrawassemblerdirective);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 327;
        _la = this._input.LA(1);
        if (!((_la & ~0x1f) === 0 && ((1 << _la) & 4209152) !== 0)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public dollar(): DollarContext {
    let localctx: DollarContext = new DollarContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 78, asmMASMParser.RULE_dollar);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 329;
        this.match(asmMASMParser.DOLLAR);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public ques(): QuesContext {
    let localctx: QuesContext = new QuesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, asmMASMParser.RULE_ques);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 331;
        this.match(asmMASMParser.QUES);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public register_(): Register_Context {
    let localctx: Register_Context = new Register_Context(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 82, asmMASMParser.RULE_register_);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 333;
        this.match(asmMASMParser.REGISTER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public string_(): StringContext {
    let localctx: StringContext = new StringContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 84, asmMASMParser.RULE_string);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 335;
        _la = this._input.LA(1);
        if (!(_la === 50 || _la === 51)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public name(): NameContext {
    let localctx: NameContext = new NameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, asmMASMParser.RULE_name);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 337;
        this.match(asmMASMParser.NAME);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public number_(): NumberContext {
    let localctx: NumberContext = new NumberContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 88, asmMASMParser.RULE_number);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 340;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 44) {
          {
            this.state = 339;
            this.match(asmMASMParser.SIGN);
          }
        }

        this.state = 342;
        this.match(asmMASMParser.NUMBER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public opcode(): OpcodeContext {
    let localctx: OpcodeContext = new OpcodeContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 90, asmMASMParser.RULE_opcode);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 344;
        this.match(asmMASMParser.OPCODE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public rep(): RepContext {
    let localctx: RepContext = new RepContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, asmMASMParser.RULE_rep);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 346;
        this.match(asmMASMParser.REP);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  public static readonly _serializedATN: number[] = [
    4, 1, 54, 349, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4,
    2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2,
    11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7,
    16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2,
    22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7,
    27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 2,
    33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7,
    38, 2, 39, 7, 39, 2, 40, 7, 40, 2, 41, 7, 41, 2, 42, 7, 42, 2, 43, 7, 43, 2,
    44, 7, 44, 2, 45, 7, 45, 2, 46, 7, 46, 1, 0, 5, 0, 96, 8, 0, 10, 0, 12, 0,
    99, 9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 3, 1, 105, 8, 1, 1, 1, 1, 1, 1, 1, 3, 1,
    110, 8, 1, 1, 1, 1, 1, 1, 2, 3, 2, 115, 8, 2, 1, 2, 1, 2, 3, 2, 119, 8, 2,
    1, 3, 1, 3, 3, 3, 123, 8, 3, 1, 4, 1, 4, 3, 4, 127, 8, 4, 1, 5, 1, 5, 1, 5,
    1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1,
    5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 4, 5, 152, 8, 5, 11, 5, 12, 5,
    153, 3, 5, 156, 8, 5, 1, 6, 4, 6, 159, 8, 6, 11, 6, 12, 6, 160, 1, 7, 1, 7,
    3, 7, 165, 8, 7, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 5, 8,
    176, 8, 8, 10, 8, 12, 8, 179, 9, 8, 1, 9, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1,
    11, 1, 11, 1, 11, 1, 11, 1, 11, 5, 11, 192, 8, 11, 10, 11, 12, 11, 195, 9,
    11, 1, 12, 1, 12, 1, 12, 3, 12, 200, 8, 12, 1, 13, 1, 13, 1, 13, 1, 14, 1,
    14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 3, 14, 215, 8,
    14, 1, 15, 1, 15, 1, 15, 1, 15, 1, 16, 1, 16, 1, 16, 1, 17, 1, 17, 1, 17, 1,
    18, 1, 18, 1, 18, 1, 19, 1, 19, 1, 19, 1, 20, 1, 20, 1, 20, 1, 21, 1, 21, 1,
    21, 1, 22, 1, 22, 1, 22, 1, 23, 1, 23, 1, 23, 1, 24, 1, 24, 1, 24, 1, 25, 1,
    25, 1, 25, 1, 25, 1, 26, 1, 26, 1, 26, 1, 27, 1, 27, 1, 27, 1, 28, 1, 28, 1,
    28, 1, 29, 1, 29, 1, 29, 1, 30, 1, 30, 1, 31, 1, 31, 1, 31, 1, 32, 1, 32, 1,
    32, 5, 32, 272, 8, 32, 10, 32, 12, 32, 275, 9, 32, 1, 33, 1, 33, 3, 33, 279,
    8, 33, 1, 34, 1, 34, 1, 34, 5, 34, 284, 8, 34, 10, 34, 12, 34, 287, 9, 34,
    1, 35, 1, 35, 1, 35, 5, 35, 292, 8, 35, 10, 35, 12, 35, 295, 9, 35, 1, 36,
    1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 3, 36, 304, 8, 36, 1, 36, 1, 36,
    1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36,
    1, 36, 1, 36, 1, 36, 3, 36, 322, 8, 36, 1, 37, 1, 37, 3, 37, 326, 8, 37, 1,
    38, 1, 38, 1, 39, 1, 39, 1, 40, 1, 40, 1, 41, 1, 41, 1, 42, 1, 42, 1, 43, 1,
    43, 1, 44, 3, 44, 341, 8, 44, 1, 44, 1, 44, 1, 45, 1, 45, 1, 46, 1, 46, 1,
    46, 0, 0, 47, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32,
    34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70,
    72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 0, 4, 1, 0, 34, 37, 1, 0, 5, 6,
    3, 0, 9, 9, 11, 13, 22, 22, 1, 0, 50, 51, 361, 0, 97, 1, 0, 0, 0, 2, 104, 1,
    0, 0, 0, 4, 114, 1, 0, 0, 0, 6, 120, 1, 0, 0, 0, 8, 124, 1, 0, 0, 0, 10,
    155, 1, 0, 0, 0, 12, 158, 1, 0, 0, 0, 14, 162, 1, 0, 0, 0, 16, 166, 1, 0, 0,
    0, 18, 180, 1, 0, 0, 0, 20, 184, 1, 0, 0, 0, 22, 186, 1, 0, 0, 0, 24, 196,
    1, 0, 0, 0, 26, 201, 1, 0, 0, 0, 28, 214, 1, 0, 0, 0, 30, 216, 1, 0, 0, 0,
    32, 220, 1, 0, 0, 0, 34, 223, 1, 0, 0, 0, 36, 226, 1, 0, 0, 0, 38, 229, 1,
    0, 0, 0, 40, 232, 1, 0, 0, 0, 42, 235, 1, 0, 0, 0, 44, 238, 1, 0, 0, 0, 46,
    241, 1, 0, 0, 0, 48, 244, 1, 0, 0, 0, 50, 247, 1, 0, 0, 0, 52, 251, 1, 0, 0,
    0, 54, 254, 1, 0, 0, 0, 56, 257, 1, 0, 0, 0, 58, 260, 1, 0, 0, 0, 60, 263,
    1, 0, 0, 0, 62, 265, 1, 0, 0, 0, 64, 268, 1, 0, 0, 0, 66, 278, 1, 0, 0, 0,
    68, 280, 1, 0, 0, 0, 70, 288, 1, 0, 0, 0, 72, 321, 1, 0, 0, 0, 74, 325, 1,
    0, 0, 0, 76, 327, 1, 0, 0, 0, 78, 329, 1, 0, 0, 0, 80, 331, 1, 0, 0, 0, 82,
    333, 1, 0, 0, 0, 84, 335, 1, 0, 0, 0, 86, 337, 1, 0, 0, 0, 88, 340, 1, 0, 0,
    0, 90, 344, 1, 0, 0, 0, 92, 346, 1, 0, 0, 0, 94, 96, 3, 2, 1, 0, 95, 94, 1,
    0, 0, 0, 96, 99, 1, 0, 0, 0, 97, 95, 1, 0, 0, 0, 97, 98, 1, 0, 0, 0, 98,
    100, 1, 0, 0, 0, 99, 97, 1, 0, 0, 0, 100, 101, 5, 0, 0, 1, 101, 1, 1, 0, 0,
    0, 102, 105, 3, 6, 3, 0, 103, 105, 3, 8, 4, 0, 104, 102, 1, 0, 0, 0, 104,
    103, 1, 0, 0, 0, 104, 105, 1, 0, 0, 0, 105, 109, 1, 0, 0, 0, 106, 110, 3,
    10, 5, 0, 107, 110, 3, 12, 6, 0, 108, 110, 3, 4, 2, 0, 109, 106, 1, 0, 0, 0,
    109, 107, 1, 0, 0, 0, 109, 108, 1, 0, 0, 0, 109, 110, 1, 0, 0, 0, 110, 111,
    1, 0, 0, 0, 111, 112, 5, 53, 0, 0, 112, 3, 1, 0, 0, 0, 113, 115, 3, 92, 46,
    0, 114, 113, 1, 0, 0, 0, 114, 115, 1, 0, 0, 0, 115, 116, 1, 0, 0, 0, 116,
    118, 3, 90, 45, 0, 117, 119, 3, 64, 32, 0, 118, 117, 1, 0, 0, 0, 118, 119,
    1, 0, 0, 0, 119, 5, 1, 0, 0, 0, 120, 122, 3, 66, 33, 0, 121, 123, 5, 1, 0,
    0, 122, 121, 1, 0, 0, 0, 122, 123, 1, 0, 0, 0, 123, 7, 1, 0, 0, 0, 124, 126,
    5, 10, 0, 0, 125, 127, 3, 86, 43, 0, 126, 125, 1, 0, 0, 0, 126, 127, 1, 0,
    0, 0, 127, 9, 1, 0, 0, 0, 128, 156, 3, 62, 31, 0, 129, 156, 3, 58, 29, 0,
    130, 156, 3, 60, 30, 0, 131, 156, 3, 52, 26, 0, 132, 156, 3, 46, 23, 0, 133,
    156, 3, 44, 22, 0, 134, 156, 3, 48, 24, 0, 135, 156, 3, 42, 21, 0, 136, 156,
    3, 34, 17, 0, 137, 156, 3, 36, 18, 0, 138, 156, 3, 38, 19, 0, 139, 156, 3,
    40, 20, 0, 140, 156, 3, 32, 16, 0, 141, 156, 3, 30, 15, 0, 142, 156, 3, 24,
    12, 0, 143, 156, 3, 26, 13, 0, 144, 156, 3, 22, 11, 0, 145, 156, 3, 18, 9,
    0, 146, 156, 3, 16, 8, 0, 147, 156, 3, 54, 27, 0, 148, 156, 3, 56, 28, 0,
    149, 151, 3, 20, 10, 0, 150, 152, 3, 64, 32, 0, 151, 150, 1, 0, 0, 0, 152,
    153, 1, 0, 0, 0, 153, 151, 1, 0, 0, 0, 153, 154, 1, 0, 0, 0, 154, 156, 1, 0,
    0, 0, 155, 128, 1, 0, 0, 0, 155, 129, 1, 0, 0, 0, 155, 130, 1, 0, 0, 0, 155,
    131, 1, 0, 0, 0, 155, 132, 1, 0, 0, 0, 155, 133, 1, 0, 0, 0, 155, 134, 1, 0,
    0, 0, 155, 135, 1, 0, 0, 0, 155, 136, 1, 0, 0, 0, 155, 137, 1, 0, 0, 0, 155,
    138, 1, 0, 0, 0, 155, 139, 1, 0, 0, 0, 155, 140, 1, 0, 0, 0, 155, 141, 1, 0,
    0, 0, 155, 142, 1, 0, 0, 0, 155, 143, 1, 0, 0, 0, 155, 144, 1, 0, 0, 0, 155,
    145, 1, 0, 0, 0, 155, 146, 1, 0, 0, 0, 155, 147, 1, 0, 0, 0, 155, 148, 1, 0,
    0, 0, 155, 149, 1, 0, 0, 0, 156, 11, 1, 0, 0, 0, 157, 159, 3, 14, 7, 0, 158,
    157, 1, 0, 0, 0, 159, 160, 1, 0, 0, 0, 160, 158, 1, 0, 0, 0, 160, 161, 1, 0,
    0, 0, 161, 13, 1, 0, 0, 0, 162, 164, 5, 47, 0, 0, 163, 165, 3, 64, 32, 0,
    164, 163, 1, 0, 0, 0, 164, 165, 1, 0, 0, 0, 165, 15, 1, 0, 0, 0, 166, 167,
    5, 43, 0, 0, 167, 168, 3, 82, 41, 0, 168, 169, 5, 1, 0, 0, 169, 177, 3, 86,
    43, 0, 170, 171, 5, 2, 0, 0, 171, 172, 3, 82, 41, 0, 172, 173, 5, 1, 0, 0,
    173, 174, 3, 86, 43, 0, 174, 176, 1, 0, 0, 0, 175, 170, 1, 0, 0, 0, 176,
    179, 1, 0, 0, 0, 177, 175, 1, 0, 0, 0, 177, 178, 1, 0, 0, 0, 178, 17, 1, 0,
    0, 0, 179, 177, 1, 0, 0, 0, 180, 181, 3, 86, 43, 0, 181, 182, 5, 41, 0, 0,
    182, 183, 3, 20, 10, 0, 183, 19, 1, 0, 0, 0, 184, 185, 7, 0, 0, 0, 185, 21,
    1, 0, 0, 0, 186, 187, 3, 86, 43, 0, 187, 188, 5, 33, 0, 0, 188, 193, 3, 86,
    43, 0, 189, 190, 5, 2, 0, 0, 190, 192, 3, 86, 43, 0, 191, 189, 1, 0, 0, 0,
    192, 195, 1, 0, 0, 0, 193, 191, 1, 0, 0, 0, 193, 194, 1, 0, 0, 0, 194, 23,
    1, 0, 0, 0, 195, 193, 1, 0, 0, 0, 196, 197, 3, 86, 43, 0, 197, 199, 5, 31,
    0, 0, 198, 200, 3, 28, 14, 0, 199, 198, 1, 0, 0, 0, 199, 200, 1, 0, 0, 0,
    200, 25, 1, 0, 0, 0, 201, 202, 3, 86, 43, 0, 202, 203, 5, 32, 0, 0, 203, 27,
    1, 0, 0, 0, 204, 215, 5, 34, 0, 0, 205, 215, 5, 36, 0, 0, 206, 215, 5, 37,
    0, 0, 207, 215, 5, 38, 0, 0, 208, 215, 5, 39, 0, 0, 209, 210, 5, 40, 0, 0,
    210, 211, 5, 3, 0, 0, 211, 212, 3, 88, 44, 0, 212, 213, 5, 4, 0, 0, 213,
    215, 1, 0, 0, 0, 214, 204, 1, 0, 0, 0, 214, 205, 1, 0, 0, 0, 214, 206, 1, 0,
    0, 0, 214, 207, 1, 0, 0, 0, 214, 208, 1, 0, 0, 0, 214, 209, 1, 0, 0, 0, 215,
    29, 1, 0, 0, 0, 216, 217, 3, 86, 43, 0, 217, 218, 5, 27, 0, 0, 218, 219, 3,
    68, 34, 0, 219, 31, 1, 0, 0, 0, 220, 221, 5, 22, 0, 0, 221, 222, 3, 64, 32,
    0, 222, 33, 1, 0, 0, 0, 223, 224, 5, 18, 0, 0, 224, 225, 3, 64, 32, 0, 225,
    35, 1, 0, 0, 0, 226, 227, 5, 19, 0, 0, 227, 228, 3, 64, 32, 0, 228, 37, 1,
    0, 0, 0, 229, 230, 5, 20, 0, 0, 230, 231, 3, 64, 32, 0, 231, 39, 1, 0, 0, 0,
    232, 233, 5, 21, 0, 0, 233, 234, 3, 64, 32, 0, 234, 41, 1, 0, 0, 0, 235,
    236, 5, 17, 0, 0, 236, 237, 3, 64, 32, 0, 237, 43, 1, 0, 0, 0, 238, 239, 5,
    14, 0, 0, 239, 240, 3, 64, 32, 0, 240, 45, 1, 0, 0, 0, 241, 242, 5, 15, 0,
    0, 242, 243, 3, 64, 32, 0, 243, 47, 1, 0, 0, 0, 244, 245, 5, 16, 0, 0, 245,
    246, 3, 64, 32, 0, 246, 49, 1, 0, 0, 0, 247, 248, 3, 88, 44, 0, 248, 249, 5,
    42, 0, 0, 249, 250, 3, 68, 34, 0, 250, 51, 1, 0, 0, 0, 251, 252, 5, 13, 0,
    0, 252, 253, 3, 68, 34, 0, 253, 53, 1, 0, 0, 0, 254, 255, 5, 45, 0, 0, 255,
    256, 3, 68, 34, 0, 256, 55, 1, 0, 0, 0, 257, 258, 5, 46, 0, 0, 258, 259, 3,
    68, 34, 0, 259, 57, 1, 0, 0, 0, 260, 261, 5, 12, 0, 0, 261, 262, 3, 68, 34,
    0, 262, 59, 1, 0, 0, 0, 263, 264, 5, 11, 0, 0, 264, 61, 1, 0, 0, 0, 265,
    266, 5, 9, 0, 0, 266, 267, 3, 68, 34, 0, 267, 63, 1, 0, 0, 0, 268, 273, 3,
    68, 34, 0, 269, 270, 5, 2, 0, 0, 270, 272, 3, 68, 34, 0, 271, 269, 1, 0, 0,
    0, 272, 275, 1, 0, 0, 0, 273, 271, 1, 0, 0, 0, 273, 274, 1, 0, 0, 0, 274,
    65, 1, 0, 0, 0, 275, 273, 1, 0, 0, 0, 276, 279, 3, 86, 43, 0, 277, 279, 3,
    74, 37, 0, 278, 276, 1, 0, 0, 0, 278, 277, 1, 0, 0, 0, 279, 67, 1, 0, 0, 0,
    280, 285, 3, 70, 35, 0, 281, 282, 5, 44, 0, 0, 282, 284, 3, 70, 35, 0, 283,
    281, 1, 0, 0, 0, 284, 287, 1, 0, 0, 0, 285, 283, 1, 0, 0, 0, 285, 286, 1, 0,
    0, 0, 286, 69, 1, 0, 0, 0, 287, 285, 1, 0, 0, 0, 288, 293, 3, 72, 36, 0,
    289, 290, 7, 1, 0, 0, 290, 292, 3, 72, 36, 0, 291, 289, 1, 0, 0, 0, 292,
    295, 1, 0, 0, 0, 293, 291, 1, 0, 0, 0, 293, 294, 1, 0, 0, 0, 294, 71, 1, 0,
    0, 0, 295, 293, 1, 0, 0, 0, 296, 322, 3, 88, 44, 0, 297, 322, 3, 78, 39, 0,
    298, 322, 3, 80, 40, 0, 299, 322, 3, 82, 41, 0, 300, 301, 3, 86, 43, 0, 301,
    302, 5, 1, 0, 0, 302, 304, 1, 0, 0, 0, 303, 300, 1, 0, 0, 0, 303, 304, 1, 0,
    0, 0, 304, 305, 1, 0, 0, 0, 305, 322, 3, 86, 43, 0, 306, 322, 3, 84, 42, 0,
    307, 308, 5, 3, 0, 0, 308, 309, 3, 68, 34, 0, 309, 310, 5, 4, 0, 0, 310,
    322, 1, 0, 0, 0, 311, 312, 5, 7, 0, 0, 312, 313, 3, 68, 34, 0, 313, 314, 5,
    8, 0, 0, 314, 322, 1, 0, 0, 0, 315, 316, 5, 23, 0, 0, 316, 322, 3, 68, 34,
    0, 317, 318, 5, 28, 0, 0, 318, 322, 3, 68, 34, 0, 319, 322, 3, 74, 37, 0,
    320, 322, 3, 50, 25, 0, 321, 296, 1, 0, 0, 0, 321, 297, 1, 0, 0, 0, 321,
    298, 1, 0, 0, 0, 321, 299, 1, 0, 0, 0, 321, 303, 1, 0, 0, 0, 321, 306, 1, 0,
    0, 0, 321, 307, 1, 0, 0, 0, 321, 311, 1, 0, 0, 0, 321, 315, 1, 0, 0, 0, 321,
    317, 1, 0, 0, 0, 321, 319, 1, 0, 0, 0, 321, 320, 1, 0, 0, 0, 322, 73, 1, 0,
    0, 0, 323, 326, 3, 90, 45, 0, 324, 326, 3, 76, 38, 0, 325, 323, 1, 0, 0, 0,
    325, 324, 1, 0, 0, 0, 326, 75, 1, 0, 0, 0, 327, 328, 7, 2, 0, 0, 328, 77, 1,
    0, 0, 0, 329, 330, 5, 29, 0, 0, 330, 79, 1, 0, 0, 0, 331, 332, 5, 30, 0, 0,
    332, 81, 1, 0, 0, 0, 333, 334, 5, 24, 0, 0, 334, 83, 1, 0, 0, 0, 335, 336,
    7, 3, 0, 0, 336, 85, 1, 0, 0, 0, 337, 338, 5, 48, 0, 0, 338, 87, 1, 0, 0, 0,
    339, 341, 5, 44, 0, 0, 340, 339, 1, 0, 0, 0, 340, 341, 1, 0, 0, 0, 341, 342,
    1, 0, 0, 0, 342, 343, 5, 49, 0, 0, 343, 89, 1, 0, 0, 0, 344, 345, 5, 25, 0,
    0, 345, 91, 1, 0, 0, 0, 346, 347, 5, 26, 0, 0, 347, 93, 1, 0, 0, 0, 23, 97,
    104, 109, 114, 118, 122, 126, 153, 155, 160, 164, 177, 193, 199, 214, 273,
    278, 285, 293, 303, 321, 325, 340,
  ];

  private static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!asmMASMParser.__ATN) {
      asmMASMParser.__ATN = new ATNDeserializer().deserialize(
        asmMASMParser._serializedATN
      );
    }

    return asmMASMParser.__ATN;
  }

  static DecisionsToDFA = asmMASMParser._ATN.decisionToState.map(
    (ds: DecisionState, index: number) => new DFA(ds, index)
  );
}

export class ProgContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public EOF(): TerminalNode {
    return this.getToken(asmMASMParser.EOF, 0);
  }
  public line_list(): LineContext[] {
    return this.getTypedRuleContexts(LineContext as any) as LineContext[];
  }
  public line(i: number): LineContext {
    return this.getTypedRuleContext(LineContext as any, i) as LineContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_prog;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterProg) {
      listener.enterProg(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitProg) {
      listener.exitProg(this);
    }
  }
}

export class LineContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public EOL(): TerminalNode {
    return this.getToken(asmMASMParser.EOL, 0);
  }
  public lbl(): LblContext {
    return this.getTypedRuleContext(LblContext as any, 0) as LblContext;
  }
  public endlbl(): EndlblContext {
    return this.getTypedRuleContext(EndlblContext as any, 0) as EndlblContext;
  }
  public assemblerdirective(): AssemblerdirectiveContext {
    return this.getTypedRuleContext(
      AssemblerdirectiveContext as any,
      0
    ) as AssemblerdirectiveContext;
  }
  public masmdirectives(): MasmdirectivesContext {
    return this.getTypedRuleContext(
      MasmdirectivesContext as any,
      0
    ) as MasmdirectivesContext;
  }
  public instruction(): InstructionContext {
    return this.getTypedRuleContext(
      InstructionContext as any,
      0
    ) as InstructionContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_line;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterLine) {
      listener.enterLine(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitLine) {
      listener.exitLine(this);
    }
  }
}

export class InstructionContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public opcode(): OpcodeContext {
    return this.getTypedRuleContext(OpcodeContext as any, 0) as OpcodeContext;
  }
  public rep(): RepContext {
    return this.getTypedRuleContext(RepContext as any, 0) as RepContext;
  }
  public expressionlist(): ExpressionlistContext {
    return this.getTypedRuleContext(
      ExpressionlistContext as any,
      0
    ) as ExpressionlistContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_instruction;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterInstruction) {
      listener.enterInstruction(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitInstruction) {
      listener.exitInstruction(this);
    }
  }
}

export class LblContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public label(): LabelContext {
    return this.getTypedRuleContext(LabelContext as any, 0) as LabelContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_lbl;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterLbl) {
      listener.enterLbl(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitLbl) {
      listener.exitLbl(this);
    }
  }
}

export class EndlblContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public END(): TerminalNode {
    return this.getToken(asmMASMParser.END, 0);
  }
  public name(): NameContext {
    return this.getTypedRuleContext(NameContext as any, 0) as NameContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_endlbl;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterEndlbl) {
      listener.enterEndlbl(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitEndlbl) {
      listener.exitEndlbl(this);
    }
  }
}

export class AssemblerdirectiveContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public org(): OrgContext {
    return this.getTypedRuleContext(OrgContext as any, 0) as OrgContext;
  }
  public if_(): If_Context {
    return this.getTypedRuleContext(If_Context as any, 0) as If_Context;
  }
  public endif_(): Endif_Context {
    return this.getTypedRuleContext(Endif_Context as any, 0) as Endif_Context;
  }
  public equ(): EquContext {
    return this.getTypedRuleContext(EquContext as any, 0) as EquContext;
  }
  public db(): DbContext {
    return this.getTypedRuleContext(DbContext as any, 0) as DbContext;
  }
  public dw(): DwContext {
    return this.getTypedRuleContext(DwContext as any, 0) as DwContext;
  }
  public dm(): DmContext {
    return this.getTypedRuleContext(DmContext as any, 0) as DmContext;
  }
  public ds(): DsContext {
    return this.getTypedRuleContext(DsContext as any, 0) as DsContext;
  }
  public include(): IncludeContext {
    return this.getTypedRuleContext(IncludeContext as any, 0) as IncludeContext;
  }
  public includelib(): IncludelibContext {
    return this.getTypedRuleContext(
      IncludelibContext as any,
      0
    ) as IncludelibContext;
  }
  public invoke(): InvokeContext {
    return this.getTypedRuleContext(InvokeContext as any, 0) as InvokeContext;
  }
  public option(): OptionContext {
    return this.getTypedRuleContext(OptionContext as any, 0) as OptionContext;
  }
  public put(): PutContext {
    return this.getTypedRuleContext(PutContext as any, 0) as PutContext;
  }
  public assign(): AssignContext {
    return this.getTypedRuleContext(AssignContext as any, 0) as AssignContext;
  }
  public segment(): SegmentContext {
    return this.getTypedRuleContext(SegmentContext as any, 0) as SegmentContext;
  }
  public endsegment(): EndsegmentContext {
    return this.getTypedRuleContext(
      EndsegmentContext as any,
      0
    ) as EndsegmentContext;
  }
  public group(): GroupContext {
    return this.getTypedRuleContext(GroupContext as any, 0) as GroupContext;
  }
  public label_(): Label_Context {
    return this.getTypedRuleContext(Label_Context as any, 0) as Label_Context;
  }
  public assume(): AssumeContext {
    return this.getTypedRuleContext(AssumeContext as any, 0) as AssumeContext;
  }
  public extern_(): Extern_Context {
    return this.getTypedRuleContext(Extern_Context as any, 0) as Extern_Context;
  }
  public public_(): Public_Context {
    return this.getTypedRuleContext(Public_Context as any, 0) as Public_Context;
  }
  public type_(): Type_Context {
    return this.getTypedRuleContext(Type_Context as any, 0) as Type_Context;
  }
  public expressionlist_list(): ExpressionlistContext[] {
    return this.getTypedRuleContexts(
      ExpressionlistContext as any
    ) as ExpressionlistContext[];
  }
  public expressionlist(i: number): ExpressionlistContext {
    return this.getTypedRuleContext(
      ExpressionlistContext as any,
      i
    ) as ExpressionlistContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_assemblerdirective;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterAssemblerdirective) {
      listener.enterAssemblerdirective(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitAssemblerdirective) {
      listener.exitAssemblerdirective(this);
    }
  }
}

export class MasmdirectivesContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public masmdirective_list(): MasmdirectiveContext[] {
    return this.getTypedRuleContexts(
      MasmdirectiveContext as any
    ) as MasmdirectiveContext[];
  }
  public masmdirective(i: number): MasmdirectiveContext {
    return this.getTypedRuleContext(
      MasmdirectiveContext as any,
      i
    ) as MasmdirectiveContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_masmdirectives;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterMasmdirectives) {
      listener.enterMasmdirectives(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitMasmdirectives) {
      listener.exitMasmdirectives(this);
    }
  }
}

export class MasmdirectiveContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public MASMDIRECTIVE(): TerminalNode {
    return this.getToken(asmMASMParser.MASMDIRECTIVE, 0);
  }
  public expressionlist(): ExpressionlistContext {
    return this.getTypedRuleContext(
      ExpressionlistContext as any,
      0
    ) as ExpressionlistContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_masmdirective;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterMasmdirective) {
      listener.enterMasmdirective(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitMasmdirective) {
      listener.exitMasmdirective(this);
    }
  }
}

export class AssumeContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public ASSUME(): TerminalNode {
    return this.getToken(asmMASMParser.ASSUME, 0);
  }
  public register__list(): Register_Context[] {
    return this.getTypedRuleContexts(
      Register_Context as any
    ) as Register_Context[];
  }
  public register_(i: number): Register_Context {
    return this.getTypedRuleContext(
      Register_Context as any,
      i
    ) as Register_Context;
  }
  public name_list(): NameContext[] {
    return this.getTypedRuleContexts(NameContext as any) as NameContext[];
  }
  public name(i: number): NameContext {
    return this.getTypedRuleContext(NameContext as any, i) as NameContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_assume;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterAssume) {
      listener.enterAssume(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitAssume) {
      listener.exitAssume(this);
    }
  }
}

export class Label_Context extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public name(): NameContext {
    return this.getTypedRuleContext(NameContext as any, 0) as NameContext;
  }
  public LABEL(): TerminalNode {
    return this.getToken(asmMASMParser.LABEL, 0);
  }
  public type_(): Type_Context {
    return this.getTypedRuleContext(Type_Context as any, 0) as Type_Context;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_label_;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterLabel_) {
      listener.enterLabel_(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitLabel_) {
      listener.exitLabel_(this);
    }
  }
}

export class Type_Context extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public BYTE(): TerminalNode {
    return this.getToken(asmMASMParser.BYTE, 0);
  }
  public SBYTE(): TerminalNode {
    return this.getToken(asmMASMParser.SBYTE, 0);
  }
  public WORD(): TerminalNode {
    return this.getToken(asmMASMParser.WORD, 0);
  }
  public DWORD(): TerminalNode {
    return this.getToken(asmMASMParser.DWORD, 0);
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_type_;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterType_) {
      listener.enterType_(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitType_) {
      listener.exitType_(this);
    }
  }
}

export class GroupContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public name_list(): NameContext[] {
    return this.getTypedRuleContexts(NameContext as any) as NameContext[];
  }
  public name(i: number): NameContext {
    return this.getTypedRuleContext(NameContext as any, i) as NameContext;
  }
  public GROUP(): TerminalNode {
    return this.getToken(asmMASMParser.GROUP, 0);
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_group;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterGroup) {
      listener.enterGroup(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitGroup) {
      listener.exitGroup(this);
    }
  }
}

export class SegmentContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public name(): NameContext {
    return this.getTypedRuleContext(NameContext as any, 0) as NameContext;
  }
  public SEGMENT(): TerminalNode {
    return this.getToken(asmMASMParser.SEGMENT, 0);
  }
  public align(): AlignContext {
    return this.getTypedRuleContext(AlignContext as any, 0) as AlignContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_segment;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterSegment) {
      listener.enterSegment(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitSegment) {
      listener.exitSegment(this);
    }
  }
}

export class EndsegmentContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public name(): NameContext {
    return this.getTypedRuleContext(NameContext as any, 0) as NameContext;
  }
  public SEGMENTEND(): TerminalNode {
    return this.getToken(asmMASMParser.SEGMENTEND, 0);
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_endsegment;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterEndsegment) {
      listener.enterEndsegment(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitEndsegment) {
      listener.exitEndsegment(this);
    }
  }
}

export class AlignContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public BYTE(): TerminalNode {
    return this.getToken(asmMASMParser.BYTE, 0);
  }
  public WORD(): TerminalNode {
    return this.getToken(asmMASMParser.WORD, 0);
  }
  public DWORD(): TerminalNode {
    return this.getToken(asmMASMParser.DWORD, 0);
  }
  public PARA(): TerminalNode {
    return this.getToken(asmMASMParser.PARA, 0);
  }
  public PAGE(): TerminalNode {
    return this.getToken(asmMASMParser.PAGE, 0);
  }
  public ALIGN(): TerminalNode {
    return this.getToken(asmMASMParser.ALIGN, 0);
  }
  public number_(): NumberContext {
    return this.getTypedRuleContext(NumberContext as any, 0) as NumberContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_align;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterAlign) {
      listener.enterAlign(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitAlign) {
      listener.exitAlign(this);
    }
  }
}

export class AssignContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public name(): NameContext {
    return this.getTypedRuleContext(NameContext as any, 0) as NameContext;
  }
  public ASSIGN(): TerminalNode {
    return this.getToken(asmMASMParser.ASSIGN, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(
      ExpressionContext as any,
      0
    ) as ExpressionContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_assign;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterAssign) {
      listener.enterAssign(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitAssign) {
      listener.exitAssign(this);
    }
  }
}

export class PutContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public PUT(): TerminalNode {
    return this.getToken(asmMASMParser.PUT, 0);
  }
  public expressionlist(): ExpressionlistContext {
    return this.getTypedRuleContext(
      ExpressionlistContext as any,
      0
    ) as ExpressionlistContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_put;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterPut) {
      listener.enterPut(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitPut) {
      listener.exitPut(this);
    }
  }
}

export class IncludeContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public INCLUDE(): TerminalNode {
    return this.getToken(asmMASMParser.INCLUDE, 0);
  }
  public expressionlist(): ExpressionlistContext {
    return this.getTypedRuleContext(
      ExpressionlistContext as any,
      0
    ) as ExpressionlistContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_include;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterInclude) {
      listener.enterInclude(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitInclude) {
      listener.exitInclude(this);
    }
  }
}

export class IncludelibContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public INCLUDELIB(): TerminalNode {
    return this.getToken(asmMASMParser.INCLUDELIB, 0);
  }
  public expressionlist(): ExpressionlistContext {
    return this.getTypedRuleContext(
      ExpressionlistContext as any,
      0
    ) as ExpressionlistContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_includelib;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterIncludelib) {
      listener.enterIncludelib(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitIncludelib) {
      listener.exitIncludelib(this);
    }
  }
}

export class InvokeContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public INVOKE(): TerminalNode {
    return this.getToken(asmMASMParser.INVOKE, 0);
  }
  public expressionlist(): ExpressionlistContext {
    return this.getTypedRuleContext(
      ExpressionlistContext as any,
      0
    ) as ExpressionlistContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_invoke;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterInvoke) {
      listener.enterInvoke(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitInvoke) {
      listener.exitInvoke(this);
    }
  }
}

export class OptionContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public OPTION(): TerminalNode {
    return this.getToken(asmMASMParser.OPTION, 0);
  }
  public expressionlist(): ExpressionlistContext {
    return this.getTypedRuleContext(
      ExpressionlistContext as any,
      0
    ) as ExpressionlistContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_option;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterOption) {
      listener.enterOption(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitOption) {
      listener.exitOption(this);
    }
  }
}

export class DsContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public DS(): TerminalNode {
    return this.getToken(asmMASMParser.DS, 0);
  }
  public expressionlist(): ExpressionlistContext {
    return this.getTypedRuleContext(
      ExpressionlistContext as any,
      0
    ) as ExpressionlistContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_ds;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterDs) {
      listener.enterDs(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitDs) {
      listener.exitDs(this);
    }
  }
}

export class DwContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public DW(): TerminalNode {
    return this.getToken(asmMASMParser.DW, 0);
  }
  public expressionlist(): ExpressionlistContext {
    return this.getTypedRuleContext(
      ExpressionlistContext as any,
      0
    ) as ExpressionlistContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_dw;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterDw) {
      listener.enterDw(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitDw) {
      listener.exitDw(this);
    }
  }
}

export class DbContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public DB(): TerminalNode {
    return this.getToken(asmMASMParser.DB, 0);
  }
  public expressionlist(): ExpressionlistContext {
    return this.getTypedRuleContext(
      ExpressionlistContext as any,
      0
    ) as ExpressionlistContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_db;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterDb) {
      listener.enterDb(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitDb) {
      listener.exitDb(this);
    }
  }
}

export class DmContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public DM(): TerminalNode {
    return this.getToken(asmMASMParser.DM, 0);
  }
  public expressionlist(): ExpressionlistContext {
    return this.getTypedRuleContext(
      ExpressionlistContext as any,
      0
    ) as ExpressionlistContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_dm;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterDm) {
      listener.enterDm(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitDm) {
      listener.exitDm(this);
    }
  }
}

export class DupContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public number_(): NumberContext {
    return this.getTypedRuleContext(NumberContext as any, 0) as NumberContext;
  }
  public DUP(): TerminalNode {
    return this.getToken(asmMASMParser.DUP, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(
      ExpressionContext as any,
      0
    ) as ExpressionContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_dup;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterDup) {
      listener.enterDup(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitDup) {
      listener.exitDup(this);
    }
  }
}

export class EquContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public EQU(): TerminalNode {
    return this.getToken(asmMASMParser.EQU, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(
      ExpressionContext as any,
      0
    ) as ExpressionContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_equ;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterEqu) {
      listener.enterEqu(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitEqu) {
      listener.exitEqu(this);
    }
  }
}

export class Extern_Context extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public EXTERN(): TerminalNode {
    return this.getToken(asmMASMParser.EXTERN, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(
      ExpressionContext as any,
      0
    ) as ExpressionContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_extern_;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterExtern_) {
      listener.enterExtern_(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitExtern_) {
      listener.exitExtern_(this);
    }
  }
}

export class Public_Context extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public PUBLIC(): TerminalNode {
    return this.getToken(asmMASMParser.PUBLIC, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(
      ExpressionContext as any,
      0
    ) as ExpressionContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_public_;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterPublic_) {
      listener.enterPublic_(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitPublic_) {
      listener.exitPublic_(this);
    }
  }
}

export class If_Context extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public IF(): TerminalNode {
    return this.getToken(asmMASMParser.IF, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(
      ExpressionContext as any,
      0
    ) as ExpressionContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_if_;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterIf_) {
      listener.enterIf_(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitIf_) {
      listener.exitIf_(this);
    }
  }
}

export class Endif_Context extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public ENDIF(): TerminalNode {
    return this.getToken(asmMASMParser.ENDIF, 0);
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_endif_;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterEndif_) {
      listener.enterEndif_(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitEndif_) {
      listener.exitEndif_(this);
    }
  }
}

export class OrgContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public ORG(): TerminalNode {
    return this.getToken(asmMASMParser.ORG, 0);
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(
      ExpressionContext as any,
      0
    ) as ExpressionContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_org;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterOrg) {
      listener.enterOrg(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitOrg) {
      listener.exitOrg(this);
    }
  }
}

export class ExpressionlistContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public expression_list(): ExpressionContext[] {
    return this.getTypedRuleContexts(
      ExpressionContext as any
    ) as ExpressionContext[];
  }
  public expression(i: number): ExpressionContext {
    return this.getTypedRuleContext(
      ExpressionContext as any,
      i
    ) as ExpressionContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_expressionlist;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterExpressionlist) {
      listener.enterExpressionlist(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitExpressionlist) {
      listener.exitExpressionlist(this);
    }
  }
}

export class LabelContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public name(): NameContext {
    return this.getTypedRuleContext(NameContext as any, 0) as NameContext;
  }
  public gross(): GrossContext {
    return this.getTypedRuleContext(GrossContext as any, 0) as GrossContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_label;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterLabel) {
      listener.enterLabel(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitLabel) {
      listener.exitLabel(this);
    }
  }
}

export class ExpressionContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public multiplyingExpression_list(): MultiplyingExpressionContext[] {
    return this.getTypedRuleContexts(
      MultiplyingExpressionContext as any
    ) as MultiplyingExpressionContext[];
  }
  public multiplyingExpression(i: number): MultiplyingExpressionContext {
    return this.getTypedRuleContext(
      MultiplyingExpressionContext as any,
      i
    ) as MultiplyingExpressionContext;
  }
  public SIGN_list(): TerminalNode[] {
    return this.getTokens(asmMASMParser.SIGN);
  }
  public SIGN(i: number): TerminalNode {
    return this.getToken(asmMASMParser.SIGN, i);
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_expression;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterExpression) {
      listener.enterExpression(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitExpression) {
      listener.exitExpression(this);
    }
  }
}

export class MultiplyingExpressionContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public argument_list(): ArgumentContext[] {
    return this.getTypedRuleContexts(
      ArgumentContext as any
    ) as ArgumentContext[];
  }
  public argument(i: number): ArgumentContext {
    return this.getTypedRuleContext(
      ArgumentContext as any,
      i
    ) as ArgumentContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_multiplyingExpression;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterMultiplyingExpression) {
      listener.enterMultiplyingExpression(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitMultiplyingExpression) {
      listener.exitMultiplyingExpression(this);
    }
  }
}

export class ArgumentContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public number_(): NumberContext {
    return this.getTypedRuleContext(NumberContext as any, 0) as NumberContext;
  }
  public dollar(): DollarContext {
    return this.getTypedRuleContext(DollarContext as any, 0) as DollarContext;
  }
  public ques(): QuesContext {
    return this.getTypedRuleContext(QuesContext as any, 0) as QuesContext;
  }
  public register_(): Register_Context {
    return this.getTypedRuleContext(
      Register_Context as any,
      0
    ) as Register_Context;
  }
  public name_list(): NameContext[] {
    return this.getTypedRuleContexts(NameContext as any) as NameContext[];
  }
  public name(i: number): NameContext {
    return this.getTypedRuleContext(NameContext as any, i) as NameContext;
  }
  public string_(): StringContext {
    return this.getTypedRuleContext(StringContext as any, 0) as StringContext;
  }
  public expression(): ExpressionContext {
    return this.getTypedRuleContext(
      ExpressionContext as any,
      0
    ) as ExpressionContext;
  }
  public NOT(): TerminalNode {
    return this.getToken(asmMASMParser.NOT, 0);
  }
  public OFFSET(): TerminalNode {
    return this.getToken(asmMASMParser.OFFSET, 0);
  }
  public gross(): GrossContext {
    return this.getTypedRuleContext(GrossContext as any, 0) as GrossContext;
  }
  public dup(): DupContext {
    return this.getTypedRuleContext(DupContext as any, 0) as DupContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_argument;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterArgument) {
      listener.enterArgument(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitArgument) {
      listener.exitArgument(this);
    }
  }
}

export class GrossContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public opcode(): OpcodeContext {
    return this.getTypedRuleContext(OpcodeContext as any, 0) as OpcodeContext;
  }
  public grossrawassemblerdirective(): GrossrawassemblerdirectiveContext {
    return this.getTypedRuleContext(
      GrossrawassemblerdirectiveContext as any,
      0
    ) as GrossrawassemblerdirectiveContext;
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_gross;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterGross) {
      listener.enterGross(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitGross) {
      listener.exitGross(this);
    }
  }
}

export class GrossrawassemblerdirectiveContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public PUT(): TerminalNode {
    return this.getToken(asmMASMParser.PUT, 0);
  }
  public IF(): TerminalNode {
    return this.getToken(asmMASMParser.IF, 0);
  }
  public ENDIF(): TerminalNode {
    return this.getToken(asmMASMParser.ENDIF, 0);
  }
  public ORG(): TerminalNode {
    return this.getToken(asmMASMParser.ORG, 0);
  }
  public EQU(): TerminalNode {
    return this.getToken(asmMASMParser.EQU, 0);
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_grossrawassemblerdirective;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterGrossrawassemblerdirective) {
      listener.enterGrossrawassemblerdirective(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitGrossrawassemblerdirective) {
      listener.exitGrossrawassemblerdirective(this);
    }
  }
}

export class DollarContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public DOLLAR(): TerminalNode {
    return this.getToken(asmMASMParser.DOLLAR, 0);
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_dollar;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterDollar) {
      listener.enterDollar(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitDollar) {
      listener.exitDollar(this);
    }
  }
}

export class QuesContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public QUES(): TerminalNode {
    return this.getToken(asmMASMParser.QUES, 0);
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_ques;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterQues) {
      listener.enterQues(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitQues) {
      listener.exitQues(this);
    }
  }
}

export class Register_Context extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public REGISTER(): TerminalNode {
    return this.getToken(asmMASMParser.REGISTER, 0);
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_register_;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterRegister_) {
      listener.enterRegister_(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitRegister_) {
      listener.exitRegister_(this);
    }
  }
}

export class StringContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public STRING1(): TerminalNode {
    return this.getToken(asmMASMParser.STRING1, 0);
  }
  public STRING2(): TerminalNode {
    return this.getToken(asmMASMParser.STRING2, 0);
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_string;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterString) {
      listener.enterString(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitString) {
      listener.exitString(this);
    }
  }
}

export class NameContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public NAME(): TerminalNode {
    return this.getToken(asmMASMParser.NAME, 0);
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_name;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterName) {
      listener.enterName(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitName) {
      listener.exitName(this);
    }
  }
}

export class NumberContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public NUMBER(): TerminalNode {
    return this.getToken(asmMASMParser.NUMBER, 0);
  }
  public SIGN(): TerminalNode {
    return this.getToken(asmMASMParser.SIGN, 0);
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_number;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterNumber) {
      listener.enterNumber(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitNumber) {
      listener.exitNumber(this);
    }
  }
}

export class OpcodeContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public OPCODE(): TerminalNode {
    return this.getToken(asmMASMParser.OPCODE, 0);
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_opcode;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterOpcode) {
      listener.enterOpcode(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitOpcode) {
      listener.exitOpcode(this);
    }
  }
}

export class RepContext extends ParserRuleContext {
  constructor(
    parser?: asmMASMParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public REP(): TerminalNode {
    return this.getToken(asmMASMParser.REP, 0);
  }
  public get ruleIndex(): number {
    return asmMASMParser.RULE_rep;
  }
  public enterRule(listener: asmMASMListener): void {
    if (listener.enterRep) {
      listener.enterRep(this);
    }
  }
  public exitRule(listener: asmMASMListener): void {
    if (listener.exitRep) {
      listener.exitRep(this);
    }
  }
}
