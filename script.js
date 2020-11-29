class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '0',
      data: '',
      process: true };

    this.method = this.method.bind(this);
    this.plus = this.plus.bind(this);
    this.equals = this.equals.bind(this);
    this.clear = this.clear.bind(this);
    this.numbers = this.numbers.bind(this);
  }

  plus(variable) {
    this.setState({
      current: variable,
      data: this.state.data + variable });

  }

  equals() {
    const result = eval(this.state.data);
    this.setState({
      current: result,
      data: this.state.data + '=' + result,
      process: true });

  }

  clear() {
    this.setState({
      current: '0',
      data: '',
      process: true });

  }

  numbers(variable) {
    if (this.state.current == '+' || this.state.current == '-' || this.state.current == '*' || this.state.current == '/') {
      this.setState({
        current: variable,
        data: this.state.data + variable });

    } else

    if (this.state.process == true) {
      this.setState({
        current: variable,
        data: variable,
        process: false });

    } else

    {
      this.setState({
        current: this.state.current + variable,
        data: this.state.data + variable });

    }
  }

  method(a) {
    const variable = a.target.value;

    if (variable == '+' || variable == '-' || variable == '*' || variable == '/') this.plus(variable);else

    if (variable == '=') {
      try {
        this.equals();
      }
      catch (e) {

      }
    } else
    if (variable == 'AC') this.clear();else

    this.numbers(variable);
  }
  render() {
    const everything = [["equals", '='], ["zero", '0'], ["one", '1'], ["two", '2'], ["three", '3'], ["four", '4'], ["five", '5'], ["six", '6'], ["seven", '7'], ["eight", '8'], ["nine", '9'], ["add", '+'], ["subtract", '-'], ["multiply", '*'], ["divide", '/'], ["decimal", '.'], ["clear", 'AC']];
    return (
      React.createElement("div", { id: "calculator" },
      React.createElement("div", { id: "display" },
      React.createElement("h3", null, this.state.data),
      React.createElement("h2", null, this.state.current)),

      everything.map(index => React.createElement("button", { id: index[0], type: "button", value: index[1], onClick: this.method, style: { gridArea: index[0] } }, index[1]))));


  }}


ReactDOM.render(React.createElement(Calc, null), document.getElementById("app"));