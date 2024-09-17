<p align="center">
  <a href="https://github.com/umans-tech/SWE-crafter">
    <img src="sweagent/frontend/src/assets/logo.png" alt="SWE-crafter logo" />
  </a>

![License](https://img.shields.io/github/license/umans-tech/SWE-crafter)
![GitHub Stars](https://img.shields.io/github/stars/umans-tech/SWE-crafter?style=social)
[![Discord](https://img.shields.io/badge/Discord-Join%20Us-7289DA?logo=discord&logoColor=white)](https://discord.gg/wBeQhw9v)
</p>


**SWE-crafter uses your LLM to automatically fix GitHub issues. Emphasizing a Test-First approach, it validates PRs with
pre-written tests, providing high-quality feedback and helping the agent correct hallucinations.**

SWE-crafter explores the application of good human development practices—like those from Extreme Programming—on
autonomous agents. By integrating a Test-First methodology, SWE-crafter aims to enhance code quality and bug resolution
in automated software engineering.

Benchmarks for this method are ongoing, showing promising improvements in code quality and bug resolution.

## 🚀 Get Started!

### Prerequisites

- **Python 3.8** or higher
- An API key for your preferred LLM (e.g., OpenAI API key)

### Installation

Clone the repository:

```bash
git clone https://github.com/umans-tech/SWE-crafter.git
cd SWE-crafter
```

Install the required dependencies:

```bash
pip install -r requirements.txt
```

### Configuration

Set your LLM API key as an environment variable:

```bash
export OPENAI_API_KEY='your-api-key-here'
```

### Usage

Run SWE-crafter to start resolving GitHub issues:

```bash
python swe_crafter.py
```

*(Adjust the command above based on your actual entry point.)*

## ✨ Features

- **Automated Issue Resolution**: Uses your LLM to automatically address GitHub issues.
- **Test-First Approach**: Validates pull requests with pre-written tests to ensure code quality.
- **High-Quality Feedback**: Provides detailed feedback to help correct hallucinations and improve solutions.
- **Improved Code Quality**: Early benchmarks indicate significant improvements in bug resolution and overall code
  quality.
- **Adopts Best Practices**: Implements human development practices from Extreme Programming in autonomous agents.

## 📖 Documentation

*Detailed documentation is coming soon! Stay tuned for updates.*

## 📊 Benchmarking

We are actively benchmarking SWE-crafter to evaluate the effectiveness of the Test-First approach in autonomous agents.
Preliminary results are promising, showing improvements in both code quality and bug resolution.

## 🤝 Contributions

We welcome contributions from the community!

- **Questions & Discussions**: Feel free to open an [issue](https://github.com/umans-tech/SWE-crafter/issues) or start
  a [discussion](https://github.com/umans-tech/SWE-crafter/discussions) for any questions or ideas.
- **Reporting Bugs**: If you encounter any issues, please report them
  via [GitHub Issues](https://github.com/umans-tech/SWE-crafter/issues).
- **Contributing Code**: We appreciate your pull requests! Please ensure your updates include appropriate tests and
  documentation.

## 🪪 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
