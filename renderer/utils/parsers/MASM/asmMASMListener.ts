// Generated from ./asmMASM/asmMASM.g4 by ANTLR 4.12.0

import { ParseTreeListener } from "antlr4";

import { ProgContext } from "./asmMASMParser";
import { LineContext } from "./asmMASMParser";
import { InstructionContext } from "./asmMASMParser";
import { LblContext } from "./asmMASMParser";
import { EndlblContext } from "./asmMASMParser";
import { AssemblerdirectiveContext } from "./asmMASMParser";
import { MasmdirectivesContext } from "./asmMASMParser";
import { MasmdirectiveContext } from "./asmMASMParser";
import { AssumeContext } from "./asmMASMParser";
import { Label_Context } from "./asmMASMParser";
import { Type_Context } from "./asmMASMParser";
import { GroupContext } from "./asmMASMParser";
import { SegmentContext } from "./asmMASMParser";
import { EndsegmentContext } from "./asmMASMParser";
import { AlignContext } from "./asmMASMParser";
import { AssignContext } from "./asmMASMParser";
import { PutContext } from "./asmMASMParser";
import { IncludeContext } from "./asmMASMParser";
import { IncludelibContext } from "./asmMASMParser";
import { InvokeContext } from "./asmMASMParser";
import { OptionContext } from "./asmMASMParser";
import { DsContext } from "./asmMASMParser";
import { DwContext } from "./asmMASMParser";
import { DbContext } from "./asmMASMParser";
import { DmContext } from "./asmMASMParser";
import { DupContext } from "./asmMASMParser";
import { EquContext } from "./asmMASMParser";
import { Extern_Context } from "./asmMASMParser";
import { Public_Context } from "./asmMASMParser";
import { If_Context } from "./asmMASMParser";
import { Endif_Context } from "./asmMASMParser";
import { OrgContext } from "./asmMASMParser";
import { ExpressionlistContext } from "./asmMASMParser";
import { LabelContext } from "./asmMASMParser";
import { ExpressionContext } from "./asmMASMParser";
import { MultiplyingExpressionContext } from "./asmMASMParser";
import { ArgumentContext } from "./asmMASMParser";
import { GrossContext } from "./asmMASMParser";
import { GrossrawassemblerdirectiveContext } from "./asmMASMParser";
import { DollarContext } from "./asmMASMParser";
import { QuesContext } from "./asmMASMParser";
import { Register_Context } from "./asmMASMParser";
import { StringContext } from "./asmMASMParser";
import { NameContext } from "./asmMASMParser";
import { NumberContext } from "./asmMASMParser";
import { OpcodeContext } from "./asmMASMParser";
import { RepContext } from "./asmMASMParser";

/**
 * This interface defines a complete listener for a parse tree produced by
 * `asmMASMParser`.
 */
export default class asmMASMListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by `asmMASMParser.prog`.
   * @param ctx the parse tree
   */
  enterProg?: (ctx: ProgContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.prog`.
   * @param ctx the parse tree
   */
  exitProg?: (ctx: ProgContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.line`.
   * @param ctx the parse tree
   */
  enterLine?: (ctx: LineContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.line`.
   * @param ctx the parse tree
   */
  exitLine?: (ctx: LineContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.instruction`.
   * @param ctx the parse tree
   */
  enterInstruction?: (ctx: InstructionContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.instruction`.
   * @param ctx the parse tree
   */
  exitInstruction?: (ctx: InstructionContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.lbl`.
   * @param ctx the parse tree
   */
  enterLbl?: (ctx: LblContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.lbl`.
   * @param ctx the parse tree
   */
  exitLbl?: (ctx: LblContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.endlbl`.
   * @param ctx the parse tree
   */
  enterEndlbl?: (ctx: EndlblContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.endlbl`.
   * @param ctx the parse tree
   */
  exitEndlbl?: (ctx: EndlblContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.assemblerdirective`.
   * @param ctx the parse tree
   */
  enterAssemblerdirective?: (ctx: AssemblerdirectiveContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.assemblerdirective`.
   * @param ctx the parse tree
   */
  exitAssemblerdirective?: (ctx: AssemblerdirectiveContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.masmdirectives`.
   * @param ctx the parse tree
   */
  enterMasmdirectives?: (ctx: MasmdirectivesContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.masmdirectives`.
   * @param ctx the parse tree
   */
  exitMasmdirectives?: (ctx: MasmdirectivesContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.masmdirective`.
   * @param ctx the parse tree
   */
  enterMasmdirective?: (ctx: MasmdirectiveContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.masmdirective`.
   * @param ctx the parse tree
   */
  exitMasmdirective?: (ctx: MasmdirectiveContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.assume`.
   * @param ctx the parse tree
   */
  enterAssume?: (ctx: AssumeContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.assume`.
   * @param ctx the parse tree
   */
  exitAssume?: (ctx: AssumeContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.label_`.
   * @param ctx the parse tree
   */
  enterLabel_?: (ctx: Label_Context) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.label_`.
   * @param ctx the parse tree
   */
  exitLabel_?: (ctx: Label_Context) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.type_`.
   * @param ctx the parse tree
   */
  enterType_?: (ctx: Type_Context) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.type_`.
   * @param ctx the parse tree
   */
  exitType_?: (ctx: Type_Context) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.group`.
   * @param ctx the parse tree
   */
  enterGroup?: (ctx: GroupContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.group`.
   * @param ctx the parse tree
   */
  exitGroup?: (ctx: GroupContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.segment`.
   * @param ctx the parse tree
   */
  enterSegment?: (ctx: SegmentContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.segment`.
   * @param ctx the parse tree
   */
  exitSegment?: (ctx: SegmentContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.endsegment`.
   * @param ctx the parse tree
   */
  enterEndsegment?: (ctx: EndsegmentContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.endsegment`.
   * @param ctx the parse tree
   */
  exitEndsegment?: (ctx: EndsegmentContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.align`.
   * @param ctx the parse tree
   */
  enterAlign?: (ctx: AlignContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.align`.
   * @param ctx the parse tree
   */
  exitAlign?: (ctx: AlignContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.assign`.
   * @param ctx the parse tree
   */
  enterAssign?: (ctx: AssignContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.assign`.
   * @param ctx the parse tree
   */
  exitAssign?: (ctx: AssignContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.put`.
   * @param ctx the parse tree
   */
  enterPut?: (ctx: PutContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.put`.
   * @param ctx the parse tree
   */
  exitPut?: (ctx: PutContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.include`.
   * @param ctx the parse tree
   */
  enterInclude?: (ctx: IncludeContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.include`.
   * @param ctx the parse tree
   */
  exitInclude?: (ctx: IncludeContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.includelib`.
   * @param ctx the parse tree
   */
  enterIncludelib?: (ctx: IncludelibContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.includelib`.
   * @param ctx the parse tree
   */
  exitIncludelib?: (ctx: IncludelibContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.invoke`.
   * @param ctx the parse tree
   */
  enterInvoke?: (ctx: InvokeContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.invoke`.
   * @param ctx the parse tree
   */
  exitInvoke?: (ctx: InvokeContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.option`.
   * @param ctx the parse tree
   */
  enterOption?: (ctx: OptionContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.option`.
   * @param ctx the parse tree
   */
  exitOption?: (ctx: OptionContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.ds`.
   * @param ctx the parse tree
   */
  enterDs?: (ctx: DsContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.ds`.
   * @param ctx the parse tree
   */
  exitDs?: (ctx: DsContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.dw`.
   * @param ctx the parse tree
   */
  enterDw?: (ctx: DwContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.dw`.
   * @param ctx the parse tree
   */
  exitDw?: (ctx: DwContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.db`.
   * @param ctx the parse tree
   */
  enterDb?: (ctx: DbContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.db`.
   * @param ctx the parse tree
   */
  exitDb?: (ctx: DbContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.dm`.
   * @param ctx the parse tree
   */
  enterDm?: (ctx: DmContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.dm`.
   * @param ctx the parse tree
   */
  exitDm?: (ctx: DmContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.dup`.
   * @param ctx the parse tree
   */
  enterDup?: (ctx: DupContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.dup`.
   * @param ctx the parse tree
   */
  exitDup?: (ctx: DupContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.equ`.
   * @param ctx the parse tree
   */
  enterEqu?: (ctx: EquContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.equ`.
   * @param ctx the parse tree
   */
  exitEqu?: (ctx: EquContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.extern_`.
   * @param ctx the parse tree
   */
  enterExtern_?: (ctx: Extern_Context) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.extern_`.
   * @param ctx the parse tree
   */
  exitExtern_?: (ctx: Extern_Context) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.public_`.
   * @param ctx the parse tree
   */
  enterPublic_?: (ctx: Public_Context) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.public_`.
   * @param ctx the parse tree
   */
  exitPublic_?: (ctx: Public_Context) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.if_`.
   * @param ctx the parse tree
   */
  enterIf_?: (ctx: If_Context) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.if_`.
   * @param ctx the parse tree
   */
  exitIf_?: (ctx: If_Context) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.endif_`.
   * @param ctx the parse tree
   */
  enterEndif_?: (ctx: Endif_Context) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.endif_`.
   * @param ctx the parse tree
   */
  exitEndif_?: (ctx: Endif_Context) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.org`.
   * @param ctx the parse tree
   */
  enterOrg?: (ctx: OrgContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.org`.
   * @param ctx the parse tree
   */
  exitOrg?: (ctx: OrgContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.expressionlist`.
   * @param ctx the parse tree
   */
  enterExpressionlist?: (ctx: ExpressionlistContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.expressionlist`.
   * @param ctx the parse tree
   */
  exitExpressionlist?: (ctx: ExpressionlistContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.label`.
   * @param ctx the parse tree
   */
  enterLabel?: (ctx: LabelContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.label`.
   * @param ctx the parse tree
   */
  exitLabel?: (ctx: LabelContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.expression`.
   * @param ctx the parse tree
   */
  enterExpression?: (ctx: ExpressionContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.expression`.
   * @param ctx the parse tree
   */
  exitExpression?: (ctx: ExpressionContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.multiplyingExpression`.
   * @param ctx the parse tree
   */
  enterMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.multiplyingExpression`.
   * @param ctx the parse tree
   */
  exitMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.argument`.
   * @param ctx the parse tree
   */
  enterArgument?: (ctx: ArgumentContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.argument`.
   * @param ctx the parse tree
   */
  exitArgument?: (ctx: ArgumentContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.gross`.
   * @param ctx the parse tree
   */
  enterGross?: (ctx: GrossContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.gross`.
   * @param ctx the parse tree
   */
  exitGross?: (ctx: GrossContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.grossrawassemblerdirective`.
   * @param ctx the parse tree
   */
  enterGrossrawassemblerdirective?: (
    ctx: GrossrawassemblerdirectiveContext
  ) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.grossrawassemblerdirective`.
   * @param ctx the parse tree
   */
  exitGrossrawassemblerdirective?: (
    ctx: GrossrawassemblerdirectiveContext
  ) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.dollar`.
   * @param ctx the parse tree
   */
  enterDollar?: (ctx: DollarContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.dollar`.
   * @param ctx the parse tree
   */
  exitDollar?: (ctx: DollarContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.ques`.
   * @param ctx the parse tree
   */
  enterQues?: (ctx: QuesContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.ques`.
   * @param ctx the parse tree
   */
  exitQues?: (ctx: QuesContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.register_`.
   * @param ctx the parse tree
   */
  enterRegister_?: (ctx: Register_Context) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.register_`.
   * @param ctx the parse tree
   */
  exitRegister_?: (ctx: Register_Context) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.string`.
   * @param ctx the parse tree
   */
  enterString?: (ctx: StringContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.string`.
   * @param ctx the parse tree
   */
  exitString?: (ctx: StringContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.name`.
   * @param ctx the parse tree
   */
  enterName?: (ctx: NameContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.name`.
   * @param ctx the parse tree
   */
  exitName?: (ctx: NameContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.number`.
   * @param ctx the parse tree
   */
  enterNumber?: (ctx: NumberContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.number`.
   * @param ctx the parse tree
   */
  exitNumber?: (ctx: NumberContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.opcode`.
   * @param ctx the parse tree
   */
  enterOpcode?: (ctx: OpcodeContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.opcode`.
   * @param ctx the parse tree
   */
  exitOpcode?: (ctx: OpcodeContext) => void;
  /**
   * Enter a parse tree produced by `asmMASMParser.rep`.
   * @param ctx the parse tree
   */
  enterRep?: (ctx: RepContext) => void;
  /**
   * Exit a parse tree produced by `asmMASMParser.rep`.
   * @param ctx the parse tree
   */
  exitRep?: (ctx: RepContext) => void;
}
