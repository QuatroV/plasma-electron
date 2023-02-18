export const NASM_SYNTAX = {
  // Set defaultToken to invalid to see what you do not tokenize yet
  // defaultToken: 'invalid',

  // nasm syntax highlighter
  name: "nasm",
  // Set defaultToken to invalid to see what you do not tokenize yet
  defaultToken: "invalid",
  caseInsensitive: true,
  registers:
    /\b((r(8|9|1[0-5])[d|w|b]?|(ah|al|bh|cl|ch|cs|dl|dh|ds|es|fs|gs|ss|bl|sil|dil|spl|bpl)|(r|e|)(ax|cx|dx|bx|si|di|sp|bp|ip|flags))|(R(8|9|1[0-5])[D|W|B]?|(AH|AL|BH|CL|CH|CS|DL|DH|DS|ES|FS|GS|SS|BL|SIL|DIL|SPL|BPL)|(R|E|)(AX|CX|DX|BX|SI|DI|SP|BP|IP|FLAGS)))\b/,
  numeric:
    /(?<=\W|^)[+-]?(0[dD]\d[\d_]*|0[hxHX][\da-fA-F][\da-fA-F_]*|0[oqOQ][0-7][0-7_]*|[10][10_]*[byBY]|0[byBY][10][10_]*|[\da-fA-F][\da-fA-F_]*[hH]|\$0[\da-fA-F][\da-fA-F_]*|[0-7][0-7_]*[qoQO]|\d[\d_]*[dD]?)/,
  builtInVars: /(?<=[^\w\$]|^)(\$\$?)(?=\W|$)/,
  size: /\b(byte|word|dword|qword|tword|oword|yword|zword|BYTE|WORD|DWORD|QWORD|TWORD|OWORD|YWORD|ZWORD|DB|db|DW|dw|DD|dd|DQ|dq|DT|dt)\b/,

  singleQuotes: /'(.*?)'/,
  doubleQuotes: /"(.*?)"/,
  backslashQuotes: /`(.*?)`/,

  semicolon: /;.*/,

  keywords:
    /\b(gf2p8affineinvqb|GF2P8AFFINEINVQB|aeskeygenassist|AESKEYGENASSIST|vfmaddsub132pd|VFMADDSUB132PD|vfmaddsub132ps|VFMADDSUB132PS|vfmaddsub213pd|VFMADDSUB213PD|vfmaddsub213ps|VFMADDSUB213PS|vfmaddsub231pd|VFMADDSUB231PD|vfmaddsub231ps|VFMADDSUB231PS|vfmsubadd132pd|VFMSUBADD132PD|vfmsubadd132ps|VFMSUBADD132PS|vfmsubadd213pd|VFMSUBADD213PD|vfmsubadd213ps|VFMSUBADD213PS|vfmsubadd231pd|VFMSUBADD231PD|vfmsubadd231ps|VFMSUBADD231PS|vpmultishiftqb|VPMULTISHIFTQB|gf2p8affineqb|GF2P8AFFINEQB|vextractf32x4|VEXTRACTF32X4|vextractf32x8|VEXTRACTF32X8|vextractf64x2|VEXTRACTF64X2|vextractf64x4|VEXTRACTF64X4|vextracti32x4|VEXTRACTI32X4|vextracti32x8|VEXTRACTI32X8|vextracti64x2|VEXTRACTI64X2|vextracti64x4|VEXTRACTI64X4|vextractf128|VEXTRACTF128|vextracti128|VEXTRACTI128|vfnmadd132pd|VFNMADD132PD|vfnmadd132ps|VFNMADD132PS|vfnmadd132sd|VFNMADD132SD|vfnmadd132ss|VFNMADD132SS|vfnmadd213pd|VFNMADD213PD|vfnmadd213ps|VFNMADD213PS|vfnmadd213sd|VFNMADD213SD|vfnmadd213ss|VFNMADD213SS|vfnmadd231pd|VFNMADD231PD|vfnmadd231ps|VFNMADD231PS|vfnmadd231sd|VFNMADD231SD|vfnmadd231ss|VFNMADD231SS|vfnmsub132pd|VFNMSUB132PD|vfnmsub132ps|VFNMSUB132PS|vfnmsub132sd|VFNMSUB132SD|vfnmsub132ss|VFNMSUB132SS|vfnmsub213pd|VFNMSUB213PD|vfnmsub213ps|VFNMSUB213PS|vfnmsub213sd|VFNMSUB213SD|vfnmsub213ss|VFNMSUB213SS|vfnmsub231pd|VFNMSUB231PD|vfnmsub231ps|VFNMSUB231PS|vfnmsub231sd|VFNMSUB231SD|vfnmsub231ss|VFNMSUB231SS|vinsertf32x4|VINSERTF32X4|vinsertf32x8|VINSERTF32X8|vinsertf64x2|VINSERTF64X2|vinsertf64x4|VINSERTF64X4|vinserti32x4|VINSERTI32X4|vinserti32x8|VINSERTI32X8|vinserti64x2|VINSERTI64X2|vinserti64x4|VINSERTI64X4|vpbroadcastb|VPBROADCASTB|vpbroadcastd|VPBROADCASTD|vpbroadcastm|VPBROADCASTM|vpbroadcastq|VPBROADCASTQ|vpbroadcastw|VPBROADCASTW|sha256rnds2|SHA256RNDS2|vcompresspd|VCOMPRESSPD|vcompressps|VCOMPRESSPS|vcvttpd2udq|VCVTTPD2UDQ|vcvttpd2uqq|VCVTTPD2UQQ|vcvttps2udq|VCVTTPS2UDQ|vcvttps2uqq|VCVTTPS2UQQ|vcvttsd2usi|VCVTTSD2USI|vcvttss2usi|VCVTTSS2USI|vfixupimmpd|VFIXUPIMMPD|vfixupimmps|VFIXUPIMMPS|vfixupimmsd|VFIXUPIMMSD|vfixupimmss|VFIXUPIMMSS|vfmadd132pd|VFMADD132PD|vfmadd132ps|VFMADD132PS|vfmadd132sd|VFMADD132SD|vfmadd132ss|VFMADD132SS|vfmadd213pd|VFMADD213PD|vfmadd213ps|VFMADD213PS|vfmadd213sd|VFMADD213SD|vfmadd213ss|VFMADD213SS|vfmadd231pd|VFMADD231PD|vfmadd231ps|VFMADD231PS|vfmadd231sd|VFMADD231SD|vfmadd231ss|VFMADD231SS|vfmsub132pd|VFMSUB132PD|vfmsub132ps|VFMSUB132PS|vfmsub132sd|VFMSUB132SD|vfmsub132ss|VFMSUB132SS|vfmsub213pd|VFMSUB213PD|vfmsub213ps|VFMSUB213PS|vfmsub213sd|VFMSUB213SD|vfmsub213ss|VFMSUB213SS|vfmsub231pd|VFMSUB231PD|vfmsub231ps|VFMSUB231PS|vfmsub231sd|VFMSUB231SD|vfmsub231ss|VFMSUB231SS|vinsertf128|VINSERTF128|vinserti128|VINSERTI128|vpbroadcast|VPBROADCAST|vpcompressd|VPCOMPRESSD|vpcompressq|VPCOMPRESSQ|vpconflictd|VPCONFLICTD|vpconflictq|VPCONFLICTQ|vpmadd52huq|VPMADD52HUQ|vpmadd52luq|VPMADD52LUQ|vpscatterdd|VPSCATTERDD|vpscatterdq|VPSCATTERDQ|vpscatterqd|VPSCATTERQD|vpscatterqq|VPSCATTERQQ|vrndscalepd|VRNDSCALEPD|vrndscaleps|VRNDSCALEPS|vrndscalesd|VRNDSCALESD|vrndscaless|VRNDSCALESS|vscatterdpd|VSCATTERDPD|vscatterdps|VSCATTERDPS|vscatterqpd|VSCATTERQPD|vscatterqps|VSCATTERQPS|aesdeclast|AESDECLAST|aesenclast|AESENCLAST|clflushopt|CLFLUSHOPT|cmpxchg16b|CMPXCHG16B|maskmovdqu|MASKMOVDQU|phminposuw|PHMINPOSUW|punpckhqdq|PUNPCKHQDQ|punpcklqdq|PUNPCKLQDQ|sha256msg1|SHA256MSG1|sha256msg2|SHA256MSG2|vbroadcast|VBROADCAST|vcvtpd2udq|VCVTPD2UDQ|vcvtpd2uqq|VCVTPD2UQQ|vcvtps2udq|VCVTPS2UDQ|vcvtps2uqq|VCVTPS2UQQ|vcvtsd2usi|VCVTSD2USI|vcvtss2usi|VCVTSS2USI|vcvttpd2qq|VCVTTPD2QQ|vcvttps2qq|VCVTTPS2QQ|vcvtudq2pd|VCVTUDQ2PD|vcvtudq2ps|VCVTUDQ2PS|vcvtuqq2pd|VCVTUQQ2PD|vcvtuqq2ps|VCVTUQQ2PS|vcvtusi2sd|VCVTUSI2SD|vcvtusi2ss|VCVTUSI2SS|vfpclasspd|VFPCLASSPD|vfpclassps|VFPCLASSPS|vfpclasssd|VFPCLASSSD|vfpclassss|VFPCLASSSS|vgatherdpd|VGATHERDPD|vgatherdpd|VGATHERDPD|vgatherdps|VGATHERDPS|vgatherdps|VGATHERDPS|vgatherqpd|VGATHERQPD|vgatherqpd|VGATHERQPD|vgatherqps|VGATHERQPS|vgatherqps|VGATHERQPS|vgetmantpd|VGETMANTPD|vgetmantps|VGETMANTPS|vgetmantsd|VGETMANTSD|vgetmantss|VGETMANTSS|vperm2f128|VPERM2F128|vperm2i128|VPERM2I128|vpgatherdd|VPGATHERDD|vpgatherdd|VPGATHERDD|vpgatherdq|VPGATHERDQ|vpgatherdq|VPGATHERDQ|vpgatherqd|VPGATHERQD|vpgatherqd|VPGATHERQD|vpgatherqq|VPGATHERQQ|vpgatherqq|VPGATHERQQ|vpternlogd|VPTERNLOGD|vpternlogq|VPTERNLOGQ|vrsqrt14pd|VRSQRT14PD|vrsqrt14ps|VRSQRT14PS|vrsqrt14sd|VRSQRT14SD|vrsqrt14ss|VRSQRT14SS|vshuff32x4|VSHUFF32X4|vshuff64x2|VSHUFF64X2|vshufi32x4|VSHUFI32X4|vshufi64x2|VSHUFI64X2|vzeroupper|VZEROUPPER|cmpxchg8b|CMPXCHG8B|cvttpd2dq|CVTTPD2DQ|cvttpd2pi|CVTTPD2PI|cvttps2dq|CVTTPS2DQ|cvttps2pi|CVTTPS2PI|cvttsd2si|CVTTSD2SI|cvttss2si|CVTTSS2SI|extractps|EXTRACTPS|gf2p8mulb|GF2P8MULB|movdir64b|MOVDIR64B|pclmulqdq|PCLMULQDQ|pcmpestri|PCMPESTRI|pcmpestrm|PCMPESTRM|pcmpistri|PCMPISTRI|pcmpistrm|PCMPISTRM|pmaddubsw|PMADDUBSW|prefetchw|PREFETCHW|prefetchh|PREFETCHH|punpckhbw|PUNPCKHBW|punpckhdq|PUNPCKHDQ|punpckhwd|PUNPCKHWD|punpcklbw|PUNPCKLBW|punpckldq|PUNPCKLDQ|punpcklwd|PUNPCKLWD|sha1nexte|SHA1NEXTE|sha1rnds4|SHA1RNDS4|vblendmpd|VBLENDMPD|vblendmps|VBLENDMPS|vcvtpd2qq|VCVTPD2QQ|vcvtph2ps|VCVTPH2PS|vcvtps2ph|VCVTPS2PH|vcvtps2qq|VCVTPS2QQ|vcvtqq2pd|VCVTQQ2PD|vcvtqq2ps|VCVTQQ2PS|vdbpsadbw|VDBPSADBW|vexpandpd|VEXPANDPD|vexpandps|VEXPANDPS|vgetexppd|VGETEXPPD|vgetexpps|VGETEXPPS|vgetexpsd|VGETEXPSD|vgetexpss|VGETEXPSS|vmovdqa32|VMOVDQA32|vmovdqa64|VMOVDQA64|vmovdqu16|VMOVDQU16|vmovdqu32|VMOVDQU32|vmovdqu64|VMOVDQU64|vpblendmb|VPBLENDMB|vpblendmd|VPBLENDMD|vpblendmq|VPBLENDMQ|vpblendmw|VPBLENDMW|vpermi2pd|VPERMI2PD|vpermi2ps|VPERMI2PS|vpermilpd|VPERMILPD|vpermilps|VPERMILPS|vpermt2pd|VPERMT2PD|vpermt2ps|VPERMT2PS|vpexpandd|VPEXPANDD|vpexpandq|VPEXPANDQ|vpmaskmov|VPMASKMOV|vpmovusdb|VPMOVUSDB|vpmovusdw|VPMOVUSDW|vpmovusqb|VPMOVUSQB|vpmovusqd|VPMOVUSQD|vpmovusqw|VPMOVUSQW|vpmovuswb|VPMOVUSWB|vptestnmb|VPTESTNMB|vptestnmd|VPTESTNMD|vptestnmq|VPTESTNMQ|vptestnmw|VPTESTNMW|vreducepd|VREDUCEPD|vreduceps|VREDUCEPS|vreducesd|VREDUCESD|vreducess|VREDUCESS|vscalefpd|VSCALEFPD|vscalefps|VSCALEFPS|vscalefsd|VSCALEFSD|vscalefss|VSCALEFSS|addsubpd|ADDSUBPD|addsubps|ADDSUBPS|blendvpd|BLENDVPD|blendvps|BLENDVPS|cldemote|CLDEMOTE|cvtdq2pd|CVTDQ2PD|cvtdq2ps|CVTDQ2PS|cvtpd2dq|CVTPD2DQ|cvtpd2pi|CVTPD2PI|cvtpd2ps|CVTPD2PS|cvtpi2pd|CVTPI2PD|cvtpi2ps|CVTPI2PS|cvtps2dq|CVTPS2DQ|cvtps2pd|CVTPS2PD|cvtps2pi|CVTPS2PI|cvtsd2si|CVTSD2SI|cvtsd2ss|CVTSD2SS|cvtsi2sd|CVTSI2SD|cvtsi2ss|CVTSI2SS|cvtss2sd|CVTSS2SD|cvtss2si|CVTSS2SI|insertps|INSERTPS|kortestb|KORTESTB|kortestd|KORTESTD|kortestq|KORTESTQ|kortestw|KORTESTW|kshiftlb|KSHIFTLB|kshiftld|KSHIFTLD|kshiftlq|KSHIFTLQ|kshiftlw|KSHIFTLW|kshiftrb|KSHIFTRB|kshiftrd|KSHIFTRD|kshiftrq|KSHIFTRQ|kshiftrw|KSHIFTRW|kunpckbw|KUNPCKBW|kunpckdq|KUNPCKDQ|kunpckwd|KUNPCKWD|maskmovq|MASKMOVQ|movmskpd|MOVMSKPD|movmskps|MOVMSKPS|movntdqa|MOVNTDQA|movshdup|MOVSHDUP|movsldup|MOVSLDUP|packssdw|PACKSSDW|packsswb|PACKSSWB|packusdw|PACKUSDW|packuswb|PACKUSWB|pblendvb|PBLENDVB|pmovmskb|PMOVMSKB|pmulhrsw|PMULHRSW|rdfsbase|RDFSBASE|rdgsbase|RDGSBASE|sha1msg1|SHA1MSG1|sha1msg2|SHA1MSG2|sysenter|SYSENTER|umonitor|UMONITOR|unpckhpd|UNPCKHPD|unpckhps|UNPCKHPS|unpcklpd|UNPCKLPD|unpcklps|UNPCKLPS|vmaskmov|VMASKMOV|vmovdqu8|VMOVDQU8|vpblendd|VPBLENDD|vpermi2b|VPERMI2B|vpermi2d|VPERMI2D|vpermi2q|VPERMI2Q|vpermi2w|VPERMI2W|vpermt2b|VPERMT2B|vpermt2d|VPERMT2D|vpermt2q|VPERMT2Q|vpermt2w|VPERMT2W|vplzcntd|VPLZCNTD|vplzcntq|VPLZCNTQ|vpmovb2m|VPMOVB2M|vpmovd2m|VPMOVD2M|vpmovm2b|VPMOVM2B|vpmovm2d|VPMOVM2D|vpmovm2q|VPMOVM2Q|vpmovm2w|VPMOVM2W|vpmovq2m|VPMOVQ2M|vpmovsdb|VPMOVSDB|vpmovsdw|VPMOVSDW|vpmovsqb|VPMOVSQB|vpmovsqd|VPMOVSQD|vpmovsqw|VPMOVSQW|vpmovswb|VPMOVSWB|vpmovw2m|VPMOVW2M|vptestmb|VPTESTMB|vptestmd|VPTESTMD|vptestmq|VPTESTMQ|vptestmw|VPTESTMW|vrangepd|VRANGEPD|vrangeps|VRANGEPS|vrangesd|VRANGESD|vrangess|VRANGESS|vrcp14pd|VRCP14PD|vrcp14ps|VRCP14PS|vrcp14sd|VRCP14SD|vrcp14ss|VRCP14SS|vzeroall|VZEROALL|wrfsbase|WRFSBASE|wrgsbase|WRGSBASE|xacquire|XACQUIRE|xrelease|XRELEASE|xsaveopt|XSAVEOPT|blendpd|BLENDPD|blendps|BLENDPS|clflush|CLFLUSH|cmpxchg|CMPXCHG|fcmovcc|FCMOVCC|fdecstp|FDECSTP|fincstp|FINCSTP|fnstenv|FNSTENV|frndint|FRNDINT|fsincos|FSINCOS|fucomip|FUCOMIP|fucompp|FUCOMPP|fxrstor|FXRSTOR|fxtract|FXTRACT|fyl2xp1|FYL2XP1|invpcid|INVPCID|ldmxcsr|LDMXCSR|monitor|MONITOR|movddup|MOVDDUP|movdiri|MOVDIRI|movdq2q|MOVDQ2Q|movhlps|MOVHLPS|movlhps|MOVLHPS|movntdq|MOVNTDQ|movntpd|MOVNTPD|movntps|MOVNTPS|movq2dq|MOVQ2DQ|mpsadbw|MPSADBW|paddusb|PADDUSB|paddusw|PADDUSW|palignr|PALIGNR|pblendw|PBLENDW|pcmpeqb|PCMPEQB|pcmpeqd|PCMPEQD|pcmpeqq|PCMPEQQ|pcmpeqw|PCMPEQW|pcmpgtb|PCMPGTB|pcmpgtd|PCMPGTD|pcmpgtq|PCMPGTQ|pcmpgtw|PCMPGTW|phaddsw|PHADDSW|phsubsw|PHSUBSW|pmaddwd|PMADDWD|pmulhuw|PMULHUW|pmuludq|PMULUDQ|pshufhw|PSHUFHW|pshuflw|PSHUFLW|psubusb|PSUBUSB|psubusw|PSUBUSW|ptwrite|PTWRITE|roundpd|ROUNDPD|roundps|ROUNDPS|roundsd|ROUNDSD|roundss|ROUNDSS|rsqrtps|RSQRTPS|rsqrtss|RSQRTSS|stmxcsr|STMXCSR|syscall|SYSCALL|sysexit|SYSEXIT|ucomisd|UCOMISD|ucomiss|UCOMISS|valignd|VALIGND|valignq|VALIGNQ|vpcmpub|VPCMPUB|vpcmpud|VPCMPUD|vpcmpuq|VPCMPUQ|vpcmpuw|VPCMPUW|vpermpd|VPERMPD|vpermps|VPERMPS|vpmovdb|VPMOVDB|vpmovdw|VPMOVDW|vpmovqb|VPMOVQB|vpmovqd|VPMOVQD|vpmovqw|VPMOVQW|vpmovwb|VPMOVWB|vprolvd|VPROLVD|vprolvq|VPROLVQ|vprorvd|VPRORVD|vprorvq|VPRORVQ|vpsllvd|VPSLLVD|vpsllvq|VPSLLVQ|vpsllvw|VPSLLVW|vpsravd|VPSRAVD|vpsravq|VPSRAVQ|vpsravw|VPSRAVW|vpsrlvd|VPSRLVD|vpsrlvq|VPSRLVQ|vpsrlvw|VPSRLVW|vtestpd|VTESTPD|vtestps|VTESTPS|xrstors|XRSTORS|aesdec|AESDEC|aesenc|AESENC|aesimc|AESIMC|andnpd|ANDNPD|andnps|ANDNPS|blsmsk|BLSMSK|bndldx|BNDLDX|bndmov|BNDMOV|bndstx|BNDSTX|cmovcc|CMOVCC|comisd|COMISD|comiss|COMISS|fcomip|FCOMIP|fcompp|FCOMPP|fdivrp|FDIVRP|ficomp|FICOMP|fidivr|FIDIVR|fisttp|FISTTP|fisubr|FISUBR|fldenv|FLDENV|fldl2e|FLDL2E|fldl2t|FLDL2T|fldlg2|FLDLG2|fldln2|FLDLN2|fnclex|FNCLEX|fninit|FNINIT|fnsave|FNSAVE|fnstcw|FNSTCW|fnstsw|FNSTSW|fpatan|FPATAN|fprem1|FPREM1|frstor|FRSTOR|fscale|FSCALE|fstenv|FSTENV|fsubrp|FSUBRP|fucomi|FUCOMI|fucomp|FUCOMP|fxsave|FXSAVE|haddpd|HADDPD|haddps|HADDPS|hsubpd|HSUBPD|hsubps|HSUBPS|invlpg|INVLPG|kandnb|KANDNB|kandnd|KANDND|kandnq|KANDNQ|kandnw|KANDNW|ktestb|KTESTB|ktestd|KTESTD|ktestq|KTESTQ|ktestw|KTESTW|kxnorb|KXNORB|kxnord|KXNORD|kxnorq|KXNORQ|kxnorw|KXNORW|lfence|LFENCE|loopcc|LOOPCC|mfence|MFENCE|movapd|MOVAPD|movaps|MOVAPS|movdqa|MOVDQA|movdqu|MOVDQU|movhpd|MOVHPD|movhps|MOVHPS|movlpd|MOVLPD|movlps|MOVLPS|movnti|MOVNTI|movntq|MOVNTQ|movsxd|MOVSXD|movupd|MOVUPD|movups|MOVUPS|paddsb|PADDSB|paddsw|PADDSW|pextrb|PEXTRB|pextrd|PEXTRD|pextrq|PEXTRQ|pextrw|PEXTRW|phaddd|PHADDD|phaddw|PHADDW|phsubd|PHSUBD|phsubw|PHSUBW|pinsrb|PINSRB|pinsrd|PINSRD|pinsrq|PINSRQ|pinsrw|PINSRW|pmaxsb|PMAXSB|pmaxsd|PMAXSD|pmaxsq|PMAXSQ|pmaxsw|PMAXSW|pmaxub|PMAXUB|pmaxud|PMAXUD|pmaxuq|PMAXUQ|pmaxuw|PMAXUW|pminsb|PMINSB|pminsd|PMINSD|pminsq|PMINSQ|pminsw|PMINSW|pminub|PMINUB|pminud|PMINUD|pminuq|PMINUQ|pminuw|PMINUW|pmovsx|PMOVSX|pmovzx|PMOVZX|pmuldq|PMULDQ|pmulhw|PMULHW|pmulld|PMULLD|pmullq|PMULLQ|pmullw|PMULLW|popcnt|POPCNT|psadbw|PSADBW|pshufb|PSHUFB|pshufd|PSHUFD|pshufw|PSHUFW|psignb|PSIGNB|psignd|PSIGND|psignw|PSIGNW|pslldq|PSLLDQ|psrldq|PSRLDQ|psubsb|PSUBSB|psubsw|PSUBSW|pushad|PUSHAD|pushfd|PUSHFD|pushfq|PUSHFQ|rdpkru|RDPKRU|rdrand|RDRAND|rdseed|RDSEED|rdtscp|RDTSCP|sfence|SFENCE|shufpd|SHUFPD|shufps|SHUFPS|sqrtpd|SQRTPD|sqrtps|SQRTPS|sqrtsd|SQRTSD|sqrtss|SQRTSS|swapgs|SWAPGS|sysret|SYSRET|tpause|TPAUSE|umwait|UMWAIT|vpcmpb|VPCMPB|vpcmpd|VPCMPD|vpcmpq|VPCMPQ|vpcmpw|VPCMPW|vpermb|VPERMB|vpermd|VPERMD|vpermq|VPERMQ|vpermw|VPERMW|vprold|VPROLD|vprolq|VPROLQ|vprord|VPRORD|vprorq|VPRORQ|wbinvd|WBINVD|wrpkru|WRPKRU|xabort|XABORT|xbegin|XBEGIN|xgetbv|XGETBV|xrstor|XRSTOR|xsavec|XSAVEC|xsaves|XSAVES|xsetbv|XSETBV|addpd|ADDPD|addps|ADDPS|addsd|ADDSD|addss|ADDSS|andpd|ANDPD|andps|ANDPS|bextr|BEXTR|bndcl|BNDCL|bndcn|BNDCN|bndcu|BNDCU|bndmk|BNDMK|bound|BOUND|bswap|BSWAP|cmppd|CMPPD|cmpps|CMPPS|cmpsb|CMPSB|cmpsd|CMPSD|cmpsd|CMPSD|cmpsq|CMPSQ|cmpss|CMPSS|cmpsw|CMPSW|cpuid|CPUID|crc32|CRC32|divpd|DIVPD|divps|DIVPS|divsd|DIVSD|divss|DIVSS|enter|ENTER|f2xm1|F2XM1|faddp|FADDP|fbstp|FBSTP|fclex|FCLEX|fcomi|FCOMI|fcomp|FCOMP|fdivp|FDIVP|fdivr|FDIVR|ffree|FFREE|fiadd|FIADD|ficom|FICOM|fidiv|FIDIV|fimul|FIMUL|finit|FINIT|fistp|FISTP|fisub|FISUB|fldcw|FLDCW|fldpi|FLDPI|fmulp|FMULP|fprem|FPREM|fptan|FPTAN|fsave|FSAVE|fsqrt|FSQRT|fstcw|FSTCW|fstsw|FSTSW|fsubp|FSUBP|fsubr|FSUBR|fucom|FUCOM|fwait|FWAIT|fyl2x|FYL2X|int|INT|iretd|IRETD|kaddb|KADDB|kaddd|KADDD|kaddq|KADDQ|kaddw|KADDW|kandb|KANDB|kandd|KANDD|kandq|KANDQ|kandw|KANDW|kmovb|KMOVB|kmovd|KMOVD|kmovq|KMOVQ|kmovw|KMOVW|knotb|KNOTB|knotd|KNOTD|knotq|KNOTQ|knotw|KNOTW|kxorb|KXORB|kxord|KXORD|kxorq|KXORQ|kxorw|KXORW|lddqu|LDDQU|leave|LEAVE|lodsb|LODSB|lodsd|LODSD|lodsq|LODSQ|lodsw|LODSW|lzcnt|LZCNT|maxpd|MAXPD|maxps|MAXPS|maxsd|MAXSD|maxss|MAXSS|minpd|MINPD|minps|MINPS|minsd|MINSD|minss|MINSS|movbe|MOVBE|movsb|MOVSB|movsd|MOVSD|movsd|MOVSD|movsq|MOVSQ|movss|MOVSS|movsw|MOVSW|movsx|MOVSX|movzx|MOVZX|mulpd|MULPD|mulps|MULPS|mulsd|MULSD|mulss|MULSS|mwait|MWAIT|outsb|OUTSB|outsd|OUTSD|outsw|OUTSW|pabsb|PABSB|pabsd|PABSD|pabsq|PABSQ|pabsw|PABSW|paddb|PADDB|paddd|PADDD|paddq|PADDQ|paddw|PADDW|pandn|PANDN|pause|PAUSE|pavgb|PAVGB|pavgw|PAVGW|popad|POPAD|popfd|POPFD|popfq|POPFQ|pslld|PSLLD|psllq|PSLLQ|psllw|PSLLW|psrad|PSRAD|psraq|PSRAQ|psraw|PSRAW|psrld|PSRLD|psrlq|PSRLQ|psrlw|PSRLW|psubb|PSUBB|psubd|PSUBD|psubq|PSUBQ|psubw|PSUBW|ptest|PTEST|pusha|PUSHA|pushf|PUSHF|rcpps|RCPPS|rcpss|RCPSS|rdmsr|RDMSR|rdpid|RDPID|rdpmc|RDPMC|rdtsc|RDTSC|repne|REPNE|repnz|REPNZ|scasb|SCASB|scasd|SCASD|scasw|SCASW|setcc|SETCC|stosb|STOSB|stosd|STOSD|stosq|STOSQ|stosw|STOSW|subpd|SUBPD|subps|SUBPS|subsd|SUBSD|subss|SUBSS|tzcnt|TZCNT|wrmsr|WRMSR|xlatb|XLATB|xorpd|XORPD|xorps|XORPS|xsave|XSAVE|xtest|XTEST|jecxz|JECXZ|adcx|ADCX|adox|ADOX|andn|ANDN|arpl|ARPL|blsi|BLSI|blsr|BLSR|bzhi|BZHI|call|CALL|cdqe|CDQE|clac|CLAC|clts|CLTS|clwb|CLWB|cmps|CMPS|cwde|CWDE|dppd|DPPD|dpps|DPPS|emms|EMMS|fabs|FABS|fadd|FADD|fbld|FBLD|fchs|FCHS|fcom|FCOM|fcos|FCOS|fdiv|FDIV|fild|FILD|fist|FIST|fld1|FLD1|fldz|FLDZ|fmul|FMUL|fnop|FNOP|fsin|FSIN|fstp|FSTP|fsub|FSUB|ftst|FTST|fxam|FXAM|fxch|FXCH|idiv|IDIV|imul|IMUL|insb|INSB|insd|INSD|insw|INSW|int1|INT1|int3|INT3|into|INTO|invd|INVD|iret|IRET|korb|KORB|kord|KORD|korq|KORQ|korw|KORW|lahf|LAHF|lgdt|LGDT|lidt|LIDT|lldt|LLDT|lmsw|LMSW|lock|LOCK|lods|LODS|loop|LOOP|movd|MOVD|movq|MOVQ|movq|MOVQ|movs|MOVS|mulx|MULX|orpd|ORPD|orps|ORPS|outs|OUTS|pand|PAND|pdep|PDEP|pext|PEXT|popa|POPA|popf|POPF|push|PUSH|pxor|PXOR|repe|REPE|repz|REPZ|rorx|RORX|sahf|SAHF|sarx|SARX|scas|SCAS|sgdt|SGDT|shld|SHLD|shlx|SHLX|shrd|SHRD|shrx|SHRX|sidt|SIDT|sldt|SLDT|smsw|SMSW|stac|STAC|stos|STOS|test|TEST|verr|VERR|verw|VERW|wait|WAIT|xadd|XADD|xchg|XCHG|xend|XEND|xlat|XLAT|jnae|JNAE|jnbe|JNBE|jnge|JNGE|jcxz|JCXZ|aaa|AAA|aad|AAD|aam|AAM|aas|AAS|adc|ADC|add|ADD|and|AND|bsf|BSF|bsr|BSR|btc|BTC|btr|BTR|bts|BTS|cbw|CBW|cdq|CDQ|clc|CLC|cld|CLD|cli|CLI|cmc|CMC|cmp|CMP|cqo|CQO|cwd|CWD|daa|DAA|das|DAS|dec|DEC|div|DIV|fld|FLD|fst|FST|hlt|HLT|inc|INC|ins|INS|jmp|JMP|jcc|JCC|jne|JNE|jae|JAE|jno|JNO|jns|JNS|jnz|JNZ|jnb|JNB|jnc|JNC|jbe|JBE|jna|JNA|jge|JGE|jnl|JNL|jle|JLE|jng|JNG|jpe|JPE|jnp|JNP|jpo|JPO|lar|LAR|lds|LDS|lea|LEA|les|LES|lfs|LFS|lgs|LGS|lsl|LSL|lss|LSS|ltr|LTR|mov|MOV|mov|MOV|mov|MOV|mul|MUL|neg|NEG|nop|NOP|not|NOT|out|OUT|pop|POP|por|POR|rcl|RCL|rcr|RCR|rep|REP|ret|RET|rol|ROL|ror|ROR|rsm|RSM|sal|SAL|sar|SAR|sbb|SBB|shl|SHL|shr|SHR|stc|STC|std|STD|sti|STI|str|STR|sub|SUB|xor|XOR|bt|BT|in|IN|je|JE|jo|JO|js|JS|jz|JZ|jb|JB|jc|JC|ja|JA|jl|JL|jg|JG|jp|JP|or|OR|ud|UD)\b/,
  labels: /^\s*[\d\w\.\$#@~\?_]+:/,

  directivesVisibility:
    /\b(global|extern|common|static|GLOBAL|EXTERN|COMMON|STATIC)\b/,
  directivesBits: /\b((bits|BITS)(\s+(16|32|64))?|(use|USE)(16|32))\b/,
  directivesDefault:
    /\b(default|DEFAULT)(\s+(rel|abs|nobnd|bnd|REL|ABS|NOBND|BND))?\b/,
  directivesSection: /\b(section|segment|SECTION|SEGMENT)\b/,
  directivesAbsolute: /\b(absolute|ABSOLUTE)\b/,
  directivesPrefix: /\b((g|l)?(pre|post)fix|(G|L)?(PRE|POST)FIX)\b/,
  directivesCpu: /\b(cpu|CPU)(\s+\w+)?\b/,
  directivesFloat:
    /\b(float|FLOAT)(\s+(((no)?daz|near|down|up|zero|default)|((NO)?DAZ|NEAR|DOWN|UP|ZERO|DEFAULT)))?\b/,
  directivesPrimitive: /\b(warning|WARNING)\b/,

  macroCall: /[\w\.\$#@~\?]+\(.*\)/,
  preprocessorKeyword:
    /^\s*%(?:define|macro|DEFINE|MACRO)\s+([\w\.\$#@~\?]+)\s*/,
  preprocessorOther: /^\s*%\w+\b/,

  psuedoInstruction:
    /\b(uppercase|import|export|(d|res)[bwdqtoyz]|times|group|near|weak|far|org|equ)|(UPPERCASE|IMPORT|EXPORT|(D|RES)[BWDQTOYZ]|TIMES|GROUP|NEAR|WEAK|FAR|ORG|EQU)\b/,

  operators:
    /(==?|!=|<=?>|<=?|>=?|\\|\\|\^\^?|&&?|<<<?|>>>?|~|!|\\+|-|\*|\?|%%?)|\b(seg|SEG|wrt|WRT)\b/,

  tokenizer: {
    root: [
      { include: "@comments" },
      { include: "@whitespace" },
      [/@registers/, "constant"],
      [/@builtInVars/, "keyword"],
      [/@numeric/, "number"],
      [/@size/, "type"],
      [/@singleQuotes/, "string"],
      [/@doubleQuotes/, "string"],
      [/@backslashQuotes/, "string"],
      [/@keywords/, "keyword"],
      [/@semicolon/, "delimiter"],
      [/@labels/, "tag"],

      [/@directivesVisibility/, "keyword"],
      [/@directivesBits/, "keyword"],
      [/@directivesDefault/, "keyword"],
      [/@directivesSection/, "keyword"],
      [/@directivesAbsolute/, "keyword"],
      [/@directivesPrefix/, "keyword"],
      [/@directivesCpu/, "keyword"],
      [/@directivesFloat/, "keyword"],
      [/@directivesPrimitive/, "keyword"],

      [/@macroCall/, "constant"],
      [/@preprocessorKeyword/, "keyword"],
      [/@preprocessorOther/, ""],

      [/@psuedoInstruction/, "keyword"],

      [/@operators/, "operators"],

      [/,/, "delimiter"],

      [/[a-z@._][\w_.]* /, "identifier"],
    ],
    comments: [[";+.*", "comment"]],
    whitespace: [[/[ \t\r\n]+/, "white"]],
  },
};
