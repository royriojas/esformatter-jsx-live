// require() some stuff from npm (like you were using browserify)
// and then hit Rebuild to run it on the right
var esformatter = require( 'esformatter' );
var esformatterJSX = require( 'esformatter-jsx' );
var throttle = require( 'lodash.throttle' );
var hash = window.location.hash.substr( 1 );
var extend = require('extend');
var $ = require( 'jquery' );

var params;

try {
  params = JSON.parse( decodeURIComponent( hash ) );
} catch (ex) {
  params = { };
}


var testCode = '// Paste your own code here...\n\n\n\ var Comment = React.createClass({\n  render: function() {\n    return (\n      <div className="comment">\n        <h2 className="commentAuthor">\n          {this.props.author}\n        </h2>\n        {this.props.children}\n      </div>\n    );\n  }\n});';

var originalConfig;
var esformatterConfig = originalConfig = {
  'jsx': {
    'attrsOnSameLineAsTag': false,
    'maxAttrsOnTag': 1,
    'firstAttributeOnSameLine': false,
    'alignWithFirstAttribute': true
  },
  'indent': {
    'value': '  ',
    'ArrayExpression': 1,
    'AssignmentExpression': 1,
    'BinaryExpression': 1,
    'ConditionalExpression': 1,
    'CallExpression': 1,
    'CatchClause': 1,
    'DoWhileStatement': 1,
    'ForInStatement': 1,
    'ForStatement': 1,
    'FunctionDeclaration': 1,
    'FunctionExpression': 1,
    'IfStatement': 1,
    'MemberExpression': 1,
    'MultipleVariableDeclaration': 1,
    'ObjectExpression': 1,
    'ReturnStatement': '>=1',
    'SwitchCase': 1,
    'SwitchStatement': 1,
    'TopLevelFunctionBlock': 1,
    'TryStatement': 1,
    'VariableDeclaration.LogicalExpression': 1,
    'WhileStatement': 1
  },
  'lineBreak': {
    'before': {
      'AssignmentExpression': '>=0',
      'AssignmentOperator': 0,
      'BlockStatement': 1,
      'CallExpression': -1,
      'ConditionalExpression': '>=1',
      'CatchOpeningBrace': 0,
      'CatchClosingBrace': '>=1',
      'CatchKeyword': 0,
      'DeleteOperator': '>=1',
      'DoWhileStatement': '>=1',
      'DoWhileStatementOpeningBrace': 0,
      'DoWhileStatementClosingBrace': '>=1',
      'EndOfFile': 1,
      'EmptyStatement': -1,
      'FinallyKeyword': -1,
      'FinallyOpeningBrace': 0,
      'FinallyClosingBrace': '>=1',
      'ForInStatement': '>=1',
      'ForInStatementExpressionOpening': 0,
      'ForInStatementExpressionClosing': 0,
      'ForInStatementOpeningBrace': 0,
      'ForInStatementClosingBrace': '>=1',
      'ForStatement': '>=1',
      'ForStatementExpressionOpening': 0,
      'ForStatementExpressionClosing': '<2',
      'ForStatementOpeningBrace': 0,
      'ForStatementClosingBrace': '>=1',
      'FunctionExpression': 0,
      'FunctionExpressionOpeningBrace': 0,
      'FunctionExpressionClosingBrace': '>=1',
      'FunctionDeclaration': '>=1',
      'FunctionDeclarationOpeningBrace': 0,
      'FunctionDeclarationClosingBrace': '>=1',
      'IfStatement': '>=1',
      'IfStatementOpeningBrace': 0,
      'IfStatementClosingBrace': '>=1',
      'ElseIfStatement': 0,
      'ElseIfStatementOpeningBrace': 0,
      'ElseIfStatementClosingBrace': '>=1',
      'ElseStatement': 0,
      'ElseStatementOpeningBrace': 0,
      'ElseStatementClosingBrace': '>=1',
      'LogicalExpression': -1,
      'ObjectExpressionOpeningBrace': 0,
      'ObjectExpressionClosingBrace': 1,
      'Property': 1,
      'ReturnStatement': '>=1',
      'SwitchOpeningBrace': 0,
      'SwitchClosingBrace': '>=1',
      'ThisExpression': -1,
      'ThrowStatement': '>=1',
      'TryKeyword': -1,
      'TryOpeningBrace': 0,
      'TryClosingBrace': '>=1',
      'VariableName': '>=1',
      'VariableValue': 0,
      'VariableDeclaration': '>=1',
      'VariableDeclarationWithoutInit': '>=1',
      'WhileStatement': '>=1',
      'WhileStatementOpeningBrace': 0,
      'WhileStatementClosingBrace': '>=1',
      'ArrayExpressionClosing': 1
    },
    'after': {
      'AssignmentExpression': '>=1',
      'AssignmentOperator': 0,
      'BlockStatement': 0,
      'CallExpression': -1,
      'CatchOpeningBrace': '>=1',
      'CatchClosingBrace': '>=0',
      'CatchKeyword': 0,
      'ConditionalExpression': '>=1',
      'DeleteOperator': '>=1',
      'DoWhileStatement': '>=1',
      'DoWhileStatementOpeningBrace': '>=1',
      'DoWhileStatementClosingBrace': 0,
      'EmptyStatement': -1,
      'FinallyKeyword': -1,
      'FinallyOpeningBrace': '>=1',
      'FinallyClosingBrace': '>=1',
      'ForInStatement': '>=1',
      'ForInStatementExpressionOpening': '<2',
      'ForInStatementExpressionClosing': -1,
      'ForInStatementOpeningBrace': '>=1',
      'ForInStatementClosingBrace': '>=1',
      'ForStatement': '>=1',
      'ForStatementExpressionOpening': '<2',
      'ForStatementExpressionClosing': -1,
      'ForStatementOpeningBrace': '>=1',
      'ForStatementClosingBrace': '>=1',
      'FunctionExpression': '>=1',
      'FunctionExpressionOpeningBrace': '>=1',
      'FunctionExpressionClosingBrace': -1,
      'FunctionDeclaration': '>=1',
      'FunctionDeclarationOpeningBrace': '>=1',
      'FunctionDeclarationClosingBrace': '>=1',
      'IfStatement': '>=1',
      'IfStatementOpeningBrace': '>=1',
      'IfStatementClosingBrace': '>=1',
      'ElseIfStatement': '>=1',
      'ElseIfStatementOpeningBrace': '>=1',
      'ElseIfStatementClosingBrace': '>=1',
      'ElseStatement': '>=1',
      'ElseStatementOpeningBrace': '>=1',
      'ElseStatementClosingBrace': '>=1',
      'LogicalExpression': -1,
      'ObjectExpressionClosingBrace': 0,
      'ObjectExpressionOpeningBrace': 1,
      'PropertyValue': 0,
      'Property': 0,
      'ReturnStatement': 1,
      'SwitchOpeningBrace': '>=1',
      'SwitchClosingBrace': '>=1',
      'ThisExpression': 0,
      'ThrowStatement': '>=1',
      'TryKeyword': -1,
      'TryOpeningBrace': '>=1',
      'TryClosingBrace': 0,
      'VariableDeclaration': '>=1',
      'WhileStatement': '>=1',
      'WhileStatementOpeningBrace': '>=1',
      'WhileStatementClosingBrace': '>=1',
      'ArrayExpressionOpening': 1,
      'ArrayExpressionComma': 1
    }
  },
  'whiteSpace': {
    'value': ' ',
    'removeTrailing': 1,
    'before': {
      'ArgumentComma': 0,
      'ArgumentList': 1,
      'ArgumentListArrayExpression': 0,
      'ArgumentListFunctionExpression': 1,
      'ArgumentListObjectExpression': 0,
      'AssignmentOperator': 1,
      'BinaryExpression': 0,
      'BinaryExpressionOperator': 1,
      'BlockComment': 1,
      'CallExpression': 1,
      'CatchParameterList': 0,
      'CatchOpeningBrace': 1,
      'CatchClosingBrace': 1,
      'CatchKeyword': 1,
      'CommaOperator': 0,
      'ConditionalExpressionConsequent': 1,
      'ConditionalExpressionAlternate': 1,
      'DoWhileStatementOpeningBrace': 1,
      'DoWhileStatementClosingBrace': 1,
      'DoWhileStatementConditional': 1,
      'EmptyStatement': 0,
      'ExpressionClosingParentheses': 0,
      'FinallyKeyword': -1,
      'FinallyOpeningBrace': 1,
      'FinallyClosingBrace': 1,
      'ForInStatement': 1,
      'ForInStatementExpressionOpening': 1,
      'ForInStatementExpressionClosing': 0,
      'ForInStatementOpeningBrace': 1,
      'ForInStatementClosingBrace': 1,
      'ForStatement': 1,
      'ForStatementExpressionOpening': 1,
      'ForStatementExpressionClosing': 0,
      'ForStatementOpeningBrace': 1,
      'ForStatementClosingBrace': 1,
      'ForStatementSemicolon': 0,
      'FunctionDeclarationOpeningBrace': 1,
      'FunctionDeclarationClosingBrace': 1,
      'FunctionExpressionOpeningBrace': 1,
      'FunctionExpressionClosingBrace': 1,
      'IfStatementConditionalOpening': 1,
      'IfStatementConditionalClosing': 1,
      'IfStatementOpeningBrace': 1,
      'IfStatementClosingBrace': 1,
      'ElseStatementOpeningBrace': 1,
      'ElseStatementClosingBrace': 1,
      'ElseIfStatementOpeningBrace': 1,
      'ElseIfStatementClosingBrace': 1,
      'MemberExpressionClosing': 1,
      'LineComment': 1,
      'LogicalExpressionOperator': 1,
      'PropertyName': 1,
      'Property': 1,
      'PropertyValue': 1,
      'ParameterList': 1,
      'SwitchDiscriminantOpening': 1,
      'SwitchDiscriminantClosing': 0,
      'ThrowKeyword': 1,
      'TryKeyword': -1,
      'TryOpeningBrace': 1,
      'TryClosingBrace': 1,
      'UnaryExpressionOperator': 0,
      'VariableName': 1,
      'VariableValue': 1,
      'WhileStatementConditionalOpening': 1,
      'WhileStatementConditionalClosing': 0,
      'WhileStatementOpeningBrace': 1,
      'WhileStatementClosingBrace': 1,
      'ParameterComma': 0,
      'ArrayExpressionOpening': 1,
      'ArrayExpressionClosing': 1,
      'ArrayExpressionComma': 0,
      'ObjectExpressionClosingBrace': 1
    },
    'after': {
      'ObjectExpressionOpeningBrace': 1,
      'ArrayExpressionOpening': 1,
      'ArrayExpressionClosing': 0,
      'ArrayExpressionComma': 1,
      'ArgumentComma': 1,
      'ArgumentList': 1,
      'ArgumentListArrayExpression': 1,
      'ArgumentListFunctionExpression': 1,
      'ArgumentListObjectExpression': 0,
      'AssignmentOperator': 1,
      'BinaryExpression': 0,
      'BinaryExpressionOperator': 1,
      'BlockComment': 1,
      'CallExpression': 0,
      'CatchParameterList': 0,
      'CatchOpeningBrace': 1,
      'CatchClosingBrace': 1,
      'CatchKeyword': 1,
      'CommaOperator': 1,
      'ConditionalExpressionConsequent': 1,
      'ConditionalExpressionTest': 1,
      'DoWhileStatementOpeningBrace': 1,
      'DoWhileStatementClosingBrace': 1,
      'DoWhileStatementBody': 1,
      'EmptyStatement': 0,
      'ExpressionOpeningParentheses': 0,
      'FinallyKeyword': -1,
      'FinallyOpeningBrace': 1,
      'FinallyClosingBrace': 1,
      'ForInStatement': 1,
      'ForInStatementExpressionOpening': 0,
      'ForInStatementExpressionClosing': 1,
      'ForInStatementOpeningBrace': 1,
      'ForInStatementClosingBrace': 1,
      'ForStatement': 1,
      'ForStatementExpressionOpening': 0,
      'ForStatementExpressionClosing': 1,
      'ForStatementClosingBrace': 1,
      'ForStatementOpeningBrace': 1,
      'ForStatementSemicolon': 1,
      'FunctionReservedWord': 1,
      'FunctionName': 0,
      'FunctionExpressionOpeningBrace': 0,
      'FunctionExpressionClosingBrace': 0,
      'FunctionDeclarationOpeningBrace': 1,
      'FunctionDeclarationClosingBrace': 1,
      'IfStatementConditionalOpening': 1,
      'IfStatementConditionalClosing': 1,
      'IfStatementOpeningBrace': 1,
      'IfStatementClosingBrace': 1,
      'ElseStatementOpeningBrace': 1,
      'ElseStatementClosingBrace': 1,
      'ElseIfStatementOpeningBrace': 1,
      'ElseIfStatementClosingBrace': 1,
      'MemberExpressionOpening': 1,
      'LogicalExpressionOperator': 1,
      'PropertyName': 0,
      'PropertyValue': 0,
      'ParameterComma': 1,
      'ParameterList': 1,
      'SwitchDiscriminantOpening': 0,
      'SwitchDiscriminantClosing': 1,
      'ThrowKeyword': 1,
      'TryKeyword': -1,
      'TryOpeningBrace': 1,
      'TryClosingBrace': 1,
      'UnaryExpressionOperator': 0,
      'VariableName': 1,
      'WhileStatementConditionalOpening': 0,
      'WhileStatementConditionalClosing': 1,
      'WhileStatementOpeningBrace': 1,
      'WhileStatementClosingBrace': 1,
      'ObjectExpressionClosingBrace': 0
    }
  }
};

if ( supportStorage ) {
  try {
    //__esConfig = params.config || JSON.parse( window.localStorage.__esconfig2__ );
    __esConfig = JSON.parse( window.localStorage.__esconfig2__ );
  } catch (ex) {
    __esConfig = esformatterConfig;
  }
} else {
  __esConfig = esformatterConfig;
}
esformatterConfig = __esConfig;
extend(true, esformatterConfig, params.config);

var supportStorage = true;

try {
  testCode = params.code || window.localStorage.__code2__ || testCode;
} catch (ex) {
  supportStorage = false;
}

esformatter.register( esformatterJSX );

var doSaveHistory = function ( code, esformatterConfig ) {
  history.replaceState( { }, 'save', '#' + encodeURIComponent( JSON.stringify( {
        config: {
          jsx: esformatterConfig.jsx
        },
        code: code
      } ) ) );
};

doSaveHistory = throttle(doSaveHistory, 1000);

function fnStart() {

  var source = document.getElementById( 'source-area' );
  var pre = document.getElementById( 'result-area' );

  source.value = testCode;

  var cdmIn = CodeMirror.fromTextArea( source, {
    lineNumbers: true,
    mode: 'javascript'
  } );

  var cdmOut = CodeMirror.fromTextArea( pre, {
    lineNumbers: true,
    mode: 'javascript'
  } );

  var formatCode = function () {
    try {
      var code = cdmIn.getValue();
      if ( supportStorage ) {
        window.localStorage.__code2__ = code;
        window.localStorage.__esconfig2__ = JSON.stringify( esformatterConfig );
      }

      doSaveHistory( code, esformatterConfig );

      var esResult = esformatter.format( code, esformatterConfig );
      cdmOut.setValue( esResult );
    } catch (ex) {
      cdmOut.setValue( '//==> Error: ' + ex.message );
      if ( supportStorage ) {
        window.localStorage.__code2__ = testCode;
      }
    }
  };

  var fCode = throttle( formatCode, 500 );
  formatCode();

  cdmIn.on( 'change', fCode );

  var $configPanel = $( '#panel-config' );
  var $doc = $( document );

  var close = function () {
    $configPanel.removeClass( 'panel-open' );
    $doc.off( '.panel' );
  };

  var shown = false;

  var $btn = $( '#btn-config' ).on( 'click', function ( e ) {

    var isOpen = $configPanel.hasClass( 'panel-open' );

    if ( !isOpen ) {
      $configPanel.addClass( 'panel-open' );
      setTimeout( function () {
        $doc.on( 'click.panel', function ( e ) {
          if ( $( e.target ).closest( '#panel-config' ).length > 0 ) {
            return;
          }
          close();
        } );
      }, 100 );

      if ( !shown ) {
        shown = true;
        var configTxt = CodeMirror.fromTextArea( document.getElementById( 'config' ), {
          lineNumbers: true,
          mode: 'javascript'
        } );

        var $restore = $( '#btn-restore' ).on( 'click', function ( e ) {
          configTxt.setValue( JSON.stringify( originalConfig, null, 2 ) );
        } );


        var __esConfig;
        if ( supportStorage ) {
          try {
            //__esConfig = params.config || JSON.parse( window.localStorage.__esconfig2__ );
            __esConfig = JSON.parse( window.localStorage.__esconfig2__ );
          } catch (ex) {
            __esConfig = esformatterConfig;
          }
        } else {
          __esConfig = esformatterConfig;
        }
        esformatterConfig = __esConfig;
        extend(true, esformatterConfig, params.config);

        configTxt.setValue( JSON.stringify( esformatterConfig, null, 2 ) );

        configTxt.on( 'change', function () {
          var esConfig;
          try {
            esConfig = JSON.parse( configTxt.getValue() );
          } catch (ex) {
            esConfig = esformatterConfig;
          }
          esformatterConfig = esConfig;
          fCode();
        } );
      }
    } else {
      close();
    }
  } );

}

$.getScript( 'https://cdn.jsdelivr.net/codemirror/4.5.0/codemirror.js' ).then( function () {
  $.getScript( 'https://cdn.jsdelivr.net/codemirror/4.5.0/mode/javascript/javascript.js' ).then( function () {
    $( fnStart );
  } );
} );
