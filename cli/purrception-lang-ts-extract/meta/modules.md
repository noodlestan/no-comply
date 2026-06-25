# @purrception/lang-ts-extract — Modules

> Generated: 2026-06-25
> By: sub-agent

```
src/
├── extractors/
│   ├── extractComponentsFromProgram.ts   # Extracts ComponentDeclaration[] from a ProgramFileAPI
│   ├── extractFunctionsFromProgram.ts    # Extracts FunctionDeclaration[] from a ProgramFileAPI
│   ├── extractImportsFromProgram.ts      # Extracts Map<string, ImportedSymbol> from a ProgramFileAPI
│   └── extractTypesFromProgram.ts        # Extracts TypeDeclaration[] from a ProgramFileAPI
├── jsdoc/
│   ├── extractFunctionJsDoc.ts           # Extracts FunctionJsDocData from a FunctionLikeDeclaration
│   ├── extractNodeJsDoc.ts               # Extracts JsDocData from any ts.Node
│   ├── getFileJsDoc.ts                   # Extracts file-level JSDoc from a ts.SourceFile
│   └── hasJsDocIgnore.ts                 # Checks if a FunctionLikeDeclaration has @ignore tag
├── program/
│   ├── createProgram.ts                  # Creates ProgramAPI from context + file list
│   ├── createProgramFile.ts              # Creates ProgramFileAPI for a single source file
│   ├── createProgramFilesContext.ts      # Factory for ProgramFilesContext (path + readFile)
│   ├── types.ts                          # Type definitions: ProgramAPI, ProgramFileAPI, ProgramFilesContext
│   └── helpers/
│       ├── getExportMap.ts               # Builds Map<ts.Node, string> of exported names
│       ├── getImportMap.ts               # Builds Map<string, ImportedSymbol> of imports
│       ├── getProgramFunctions.ts        # Walks source file for FunctionLikeDeclaration nodes
│       └── getProgramTypes.ts            # Walks source file for type/interface declarations
└── program-node/
    ├── extractFunctionFromDeclaration.ts # Transforms FunctionLikeDeclaration → FunctionDeclaration
    ├── extractTypeFromDeclaration.ts     # Transforms type/interface → TypeDeclaration
    └── helpers/
        ├── addChildrenToComponentProps.ts    # Adds children prop to component declarations
        ├── extractArrayTypeNode.ts           # Extracts ArrayTypeNode → TypeExpressionNode
        ├── extractConditionalTypeNode.ts     # Extracts ConditionalTypeNode
        ├── extractExportedName.ts            # Resolves the exported name of a declaration
        ├── extractFunctionParams.ts          # Extracts function parameter list with JSDoc
        ├── extractFunctionReturns.ts         # Extracts function return type with JSDoc
        ├── extractFunctionTypeNode.ts        # Extracts FunctionTypeNode → FunctionTypeNode model
        ├── extractInferTypeNode.ts           # Extracts InferTypeNode
        ├── extractInterfaceDeclaration.ts    # Transforms InterfaceDeclaration → InterfaceDeclaration
        ├── extractIntersectionTypeNode.ts    # Extracts IntersectionTypeNode
        ├── extractLiteralTypeNode.ts         # Extracts LiteralTypeNode
        ├── extractMappedTypeNode.ts          # Extracts MappedTypeNode
        ├── extractNodeGenerics.ts            # Extracts generic type parameters
        ├── extractObjectLiteralTypeMember.ts # Extracts a single object literal type member
        ├── extractObjectLiteralTypeNode.ts   # Extracts ObjectLiteralTypeNode
        ├── extractOmitTypeNode.ts            # Extracts Omit<T, K> type references
        ├── extractOperatorTypeExpression.ts  # Extracts operator type expressions (keyof, readonly, etc.)
        ├── extractPickTypeNode.ts            # Extracts Pick<T, K> type references
        ├── extractTemplateLiteralTypeNode.ts # Extracts TemplateLiteralTypeNode
        ├── extractTupleTypeNode.ts           # Extracts TupleTypeNode
        ├── extractTypeExpression.ts          # Central dispatcher: routes ts.TypeNode → TypeExpressionNode
        ├── extractTypeRef.ts                 # Extracts TypeReferenceNode → TypeRefNode
        ├── extractUnionTypeNode.ts           # Extracts UnionTypeNode
        ├── extractVariableFunctionType.ts    # Extracts explicit type from variable declarations
        ├── isExportedDeclaration.ts          # Checks if a declaration is publicly exported
        └── throwUnsupportedNodeError.ts      # Throws descriptive error for unsupported TS nodes
```

> Index files (`index.ts`), `private/` directories, and `parts/`/`functions/` directories are excluded.
