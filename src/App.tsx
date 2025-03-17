import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { promptData, getAllTags } from "./data/promptData";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [expandedPrompt, setExpandedPrompt] = useState<{
    title: string;
    description: string;
    shortDescription: string;
    prompt: string;
    tags: string[];
    id?: string;
  } | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copyAlert, setCopyAlert] = useState<{
    show: boolean;
    promptId: string;
  }>({ show: false, promptId: "" });

  // All available tags extracted from prompts
  const allTags = getAllTags();

  // Check URL for prompt ID on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const promptId = urlParams.get("prompt");

    if (promptId) {
      // Find the prompt with matching ID
      for (const category of promptData) {
        const foundPrompt = category.prompts.find((p) => p.id === promptId);
        if (foundPrompt) {
          setExpandedPrompt(foundPrompt);
          break;
        }
      }
    }
  }, []);

  // Update URL when a prompt is expanded or closed
  useEffect(() => {
    if (expandedPrompt && expandedPrompt.id) {
      // Update URL with prompt ID without refreshing the page
      const url = new URL(window.location.href);
      url.searchParams.set("prompt", expandedPrompt.id);
      window.history.pushState({}, "", url);
    } else {
      // Remove prompt parameter when modal is closed
      const url = new URL(window.location.href);
      url.searchParams.delete("prompt");
      window.history.pushState({}, "", url);
    }
  }, [expandedPrompt]);

  // Function to filter prompts based on search, category, and tags
  const getFilteredPrompts = () => {
    // Start with all categories
    let result = [...promptData];

    // Filter by search term
    if (searchTerm) {
      result = result
        .map((category) => ({
          ...category,
          prompts: category.prompts.filter(
            (prompt) =>
              prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              prompt.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
          ),
        }))
        .filter((category) => category.prompts.length > 0);
    }

    // Filter by category (if not "All")
    if (selectedCategory !== "All") {
      result = result.filter((category) => category.name === selectedCategory);
    }

    // Filter by tags (if any selected)
    if (selectedTags.length > 0) {
      result = result
        .map((category) => ({
          ...category,
          prompts: category.prompts.filter((prompt) =>
            selectedTags.some((tag) => prompt.tags.includes(tag))
          ),
        }))
        .filter((category) => category.prompts.length > 0);
    }

    return result;
  };

  const filteredPrompts = getFilteredPrompts();

  // Function to handle tag selection
  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );

    // When selecting tags, reset category to "All"
    if (!selectedTags.includes(tag)) {
      setSelectedCategory("All");
    }
  };

  // Function to clear all selected tags
  const clearTags = () => {
    setSelectedTags([]);
  };

  // Function to copy prompt to clipboard with alert
  const copyToClipboard = (text: string, promptId: string) => {
    navigator.clipboard.writeText(text);
    setCopyAlert({ show: true, promptId });

    // Hide the alert after 2 seconds
    setTimeout(() => {
      setCopyAlert({ show: false, promptId: "" });
    }, 2000);
  };

  // Function to open ChatGPT with the prompt
  const openInChatGPT = (text: string) => {
    // Encode the prompt text for URL
    const encodedPrompt = encodeURIComponent(text);
    // Open ChatGPT with the prompt pre-filled
    window.open(`https://chat.openai.com/?prompt=${encodedPrompt}`, "_blank");
  };

  // Close mobile menu when a category or tag is selected
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [selectedCategory, selectedTags]);

  // Function to handle expanding a prompt
  const handleExpandPrompt = (prompt: {
    title: string;
    description: string;
    shortDescription: string;
    prompt: string;
    tags: string[];
    id?: string;
  }) => {
    setExpandedPrompt(prompt);
  };

  return (
    <div className="relative min-h-screen bg-black font-sans flex flex-col">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-soft-light pointer-events-none"></div>

      {/* Navbar - Enhanced */}
      <nav className="sticky top-0 z-10 bg-black/40 backdrop-blur-lg border-b border-white/10 shadow-sm shadow-black/20">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left side - Brand and Home link */}
            <div className="flex items-center space-x-4">
              <a
                href="/prompts"
                className="flex items-center space-x-2 group"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.reload();
                }}
              >
                <span className="font-mono text-xl text-lime-400 group-hover:text-lime-300">
                  &gt;
                </span>
                <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-yellow-500 tracking-tight">
                  PromptLib
                </span>
              </a>
              <Link
                to="https://thinki.sh"
                className="hidden sm:block text-white/80 hover:text-white text-sm md:text-base"
              >
                thinki.sh
              </Link>
            </div>

            {/* Right side - Search and mobile menu */}
            <div className="flex items-center">
              <div className="relative w-36 sm:w-48 md:w-64">
                <input
                  type="text"
                  placeholder="Search prompts..."
                  className="w-full px-3 py-1.5 md:px-4 md:py-2 text-sm rounded-lg bg-black/30 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button
                className="ml-3 text-white/80 hover:text-white p-2 md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Enhanced (hidden when mobile menu is open) */}
      {!isMobileMenuOpen && (
        <div className="relative bg-black/40 backdrop-blur-lg border-b border-white/10 py-16 mb-8 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-lime-500/5 to-yellow-500/5 opacity-30"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/grid.svg')] opacity-[0.03] mix-blend-soft-light"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center mb-4">
                <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-yellow-500">
                  Prompt Engineering Library
                </h1>
              </div>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Discover and use expertly crafted prompts to get the most out of
                AI language models. Browse by category, search for specific
                topics, or filter by tags to find the perfect prompt for your
                needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  className="px-6 py-2.5 bg-gradient-to-r from-lime-500 to-lime-400 hover:from-lime-400 hover:to-lime-500 text-gray-900 font-medium rounded-lg shadow-lg shadow-lime-500/20"
                  onClick={() => {
                    document.getElementById("main-content")?.scrollIntoView();
                  }}
                >
                  Browse Prompts
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area with Improved Sidebar */}
      <div
        className="container mx-auto px-4 md:px-6 flex-grow"
        id="main-content"
      >
        {/* Mobile Sidebar - Improved */}
        {isMobileMenuOpen && (
          <div className="md:hidden mb-6 bg-black/30 backdrop-blur-md rounded-lg border border-white/10 shadow-xl max-h-[70vh] overflow-y-auto">
            <div className="p-4">
              <div className="mb-6">
                <h2 className="text-xl font-display font-semibold text-white mb-3 tracking-tight">
                  Categories
                </h2>
                <ul className="space-y-1.5">
                  <li>
                    <button
                      className={`w-full text-left px-3 py-2 rounded ${
                        selectedCategory === "All"
                          ? "bg-lime-500/20 text-lime-400 border border-lime-500/30"
                          : "text-white/70 hover:bg-white/10 border border-transparent"
                      }`}
                      onClick={() => setSelectedCategory("All")}
                    >
                      All
                    </button>
                  </li>
                  {promptData.map((category, index) => (
                    <li key={index}>
                      <button
                        className={`w-full text-left px-3 py-2 rounded ${
                          selectedCategory === category.name
                            ? "bg-lime-500/20 text-lime-400 border border-lime-500/30"
                            : "text-white/70 hover:bg-white/10 border border-transparent"
                        }`}
                        onClick={() => {
                          setSelectedCategory(category.name);
                          setSelectedTags([]);
                        }}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-xl font-display font-semibold text-white tracking-tight">
                    Tags
                  </h2>
                  {selectedTags.length > 0 && (
                    <button
                      className="text-xs text-lime-400 hover:text-lime-300"
                      onClick={clearTags}
                    >
                      Clear all
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag, index) => (
                    <button
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedTags.includes(tag)
                          ? "bg-black/40 text-lime-300 border border-lime-500/30"
                          : "bg-black/20 text-white/70 border border-white/10 hover:bg-black/30"
                      }`}
                      onClick={() => handleTagToggle(tag)}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row md:gap-6">
          {/* Desktop Sidebar - Improved */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-black/30 backdrop-blur-md rounded-lg border border-white/10 shadow-lg max-h-[calc(100vh-120px)] overflow-y-auto">
              <div className="p-5">
                <div className="mb-6">
                  <h2 className="text-xl font-display font-semibold text-white mb-3 tracking-tight">
                    Categories
                  </h2>
                  <ul className="space-y-1.5">
                    <li>
                      <button
                        className={`w-full text-left px-3 py-2 rounded ${
                          selectedCategory === "All"
                            ? "bg-lime-500/20 text-lime-400 border border-lime-500/30"
                            : "text-white/70 hover:bg-white/10 border border-transparent"
                        }`}
                        onClick={() => setSelectedCategory("All")}
                      >
                        All
                      </button>
                    </li>
                    {promptData.map((category, index) => (
                      <li key={index}>
                        <button
                          className={`w-full text-left px-3 py-2 rounded ${
                            selectedCategory === category.name
                              ? "bg-lime-500/20 text-lime-400 border border-lime-500/30"
                              : "text-white/70 hover:bg-white/10 border border-transparent"
                          }`}
                          onClick={() => {
                            setSelectedCategory(category.name);
                            setSelectedTags([]);
                          }}
                        >
                          {category.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="text-xl font-display font-semibold text-white tracking-tight">
                      Tags
                    </h2>
                    {selectedTags.length > 0 && (
                      <button
                        className="text-xs text-lime-400 hover:text-lime-300"
                        onClick={clearTags}
                      >
                        Clear all
                      </button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map((tag, index) => (
                      <button
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedTags.includes(tag)
                            ? "bg-black/40 text-lime-300 border border-lime-500/30"
                            : "bg-black/20 text-white/70 border border-white/10 hover:bg-black/30"
                        }`}
                        onClick={() => handleTagToggle(tag)}
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content - Improved Card Layout */}
          <main className="flex-1 mt-6 md:mt-0">
            {filteredPrompts.length > 0 ? (
              <div className="space-y-8">
                {filteredPrompts.map((category, index) => (
                  <section key={index}>
                    <h2 className="text-2xl font-display font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-yellow-500 tracking-tight">
                      {category.name} Prompts
                    </h2>
                    <div className="grid gap-5 grid-cols-1">
                      {category.prompts.map((prompt, promptIndex) => (
                        <div
                          key={promptIndex}
                          className="bg-white/[0.07] backdrop-blur-md border border-white/10 rounded-lg p-6 hover:bg-white/[0.09] shadow-lg flex flex-col h-full"
                        >
                          <h3 className="text-xl font-display font-medium mb-2 text-white tracking-tight">
                            {prompt.title}
                          </h3>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {prompt.tags.map(
                              (tag: string, tagIndex: number) => (
                                <span
                                  key={tagIndex}
                                  className="text-xs px-2 py-1 bg-black/20 rounded-full text-lime-300/80 border border-lime-500/10"
                                >
                                  #{tag}
                                </span>
                              )
                            )}
                          </div>
                          <p className="text-white/70 mb-4 flex-grow leading-relaxed">
                            {prompt.description}
                          </p>

                          {/* Styled prompt preview as a quote with ellipsis and improved padding */}
                          <div className="relative bg-black/20 rounded-lg p-4 pb-6 mb-4 border-l-4 border-lime-500/30 text-white/70 italic text-sm line-clamp-2 overflow-hidden">
                            <svg
                              className="absolute top-1 left-2 w-4 h-4 text-lime-500/30 opacity-50"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <div className="pl-6 whitespace-pre-wrap break-words">
                              {prompt.prompt}
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                            <button
                              className="w-full sm:flex-1 md:w-auto text-sm bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/10 text-white px-3 py-2 rounded-md flex items-center justify-center"
                              onClick={() =>
                                copyToClipboard(
                                  prompt.prompt,
                                  "id" in prompt ? prompt.id : ""
                                )
                              }
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-1.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                                />
                              </svg>
                              Copy
                              {copyAlert.show &&
                                copyAlert.promptId ===
                                  ("id" in prompt ? prompt.id : undefined) && (
                                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-lime-500 text-black px-3 py-1 rounded text-xs font-medium shadow-md">
                                    Copied!
                                  </span>
                                )}
                            </button>

                            {/* New Share Button */}
                            {"id" in prompt && prompt.id && (
                              <button
                                className="w-full sm:flex-1 md:w-auto text-sm bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/10 text-white px-3 py-2 rounded-md flex items-center justify-center"
                                onClick={() => {
                                  const url = new URL(window.location.href);
                                  url.searchParams.set("prompt", prompt.id);
                                  navigator.clipboard.writeText(url.toString());
                                  setCopyAlert({
                                    show: true,
                                    promptId: `share-${prompt.id}`,
                                  });
                                  setTimeout(() => {
                                    setCopyAlert({ show: false, promptId: "" });
                                  }, 2000);
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 mr-1.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                  />
                                </svg>
                                Share
                                {copyAlert.show &&
                                  copyAlert.promptId ===
                                    `share-${prompt.id}` && (
                                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-lime-500 text-black px-3 py-1 rounded text-xs font-medium shadow-md">
                                      Link copied!
                                    </span>
                                  )}
                              </button>
                            )}
                            <button
                              className="w-full sm:flex-1 md:w-auto text-sm bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/10 text-white px-3 py-2 rounded-md flex items-center justify-center"
                              onClick={() => openInChatGPT(prompt.prompt)}
                            >
                              <img
                                src="/chatgpt-logo.png"
                                alt="ChatGPT Logo"
                                className="w-4 h-4 mr-1.5 object-contain"
                              />
                              ChatGPT
                            </button>
                            <button
                              className="w-full sm:flex-1 md:w-auto text-sm bg-gradient-to-r from-lime-500/20 to-lime-400/20 hover:from-lime-500/30 hover:to-lime-400/30 border border-lime-500/20 text-lime-400 px-3 py-2 rounded-md flex items-center justify-center"
                              onClick={() => handleExpandPrompt(prompt)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 mr-1.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <polyline points="9 21 3 21 3 15"></polyline>
                                <line x1="21" y1="3" x2="14" y2="10"></line>
                                <line x1="3" y1="21" x2="10" y2="14"></line>
                              </svg>
                              Expand
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            ) : (
              <div className="text-center text-white/70 py-12 bg-black/30 backdrop-blur-md rounded-lg border border-white/10">
                <p className="text-xl font-display">
                  No prompts found matching your criteria.
                </p>
                <button
                  className="mt-4 text-lime-400 hover:text-lime-300"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                    setSelectedTags([]);
                  }}
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Modal for expanded prompt - Enhanced */}
      {expandedPrompt && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div
            className="bg-gray-900/90 border border-white/10 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-display font-semibold text-white tracking-tight">
                  {expandedPrompt.title}
                </h3>
                <button
                  className="text-white/70 hover:text-white"
                  onClick={() => setExpandedPrompt(null)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {expandedPrompt.tags.map((tag: string, tagIndex: number) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-2 py-1 bg-black/30 rounded-full text-lime-300/80 border border-lime-500/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">
                {expandedPrompt.description}
              </p>

              <div className="bg-black/50 rounded-lg p-4 mb-6 text-white/90 font-mono text-sm overflow-auto max-h-60 border border-white/5">
                {expandedPrompt.prompt}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 relative">
                <button
                  className="w-full sm:flex-1 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-lg flex items-center justify-center"
                  onClick={() => setExpandedPrompt(null)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Back
                </button>
                {expandedPrompt && expandedPrompt.id && (
                  <button
                    className="w-full sm:flex-1 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-lg flex items-center justify-center"
                    onClick={() => {
                      const url = new URL(window.location.href);
                      navigator.clipboard.writeText(url.toString());
                      setCopyAlert({ show: true, promptId: "share-link" });
                      setTimeout(() => {
                        setCopyAlert({ show: false, promptId: "" });
                      }, 2000);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                    Share
                    {copyAlert.show && copyAlert.promptId === "share-link" && (
                      <span className="absolute -top-8 right-0 bg-lime-500 text-black px-3 py-1 rounded text-xs font-medium shadow-md">
                        Link copied!
                      </span>
                    )}
                  </button>
                )}
                <button
                  className="w-full sm:flex-1 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-lg flex items-center justify-center"
                  onClick={() => openInChatGPT(expandedPrompt.prompt)}
                >
                  <img
                    src="/chatgpt-logo.png"
                    alt="ChatGPT Logo"
                    className="w-5 h-5 mr-2"
                  />
                  ChatGPT
                </button>
                <button
                  className="w-full sm:flex-1 bg-gradient-to-r from-lime-500 to-lime-400 hover:from-lime-400 hover:to-lime-500 text-gray-900 font-medium px-4 py-2 rounded-lg flex items-center justify-center"
                  onClick={() =>
                    copyToClipboard(expandedPrompt.prompt, "modal")
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    />
                  </svg>
                  Copy
                  {copyAlert.show && copyAlert.promptId === "modal" && (
                    <span className="absolute -top-8 right-0 bg-lime-500 text-black px-3 py-1 rounded text-xs font-medium shadow-md">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-16 bg-black/40 backdrop-blur-lg border-t border-white/10 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-2 md:mb-0">
              <div className="flex items-center justify-center md:justify-start">
                <span className="font-mono text-xl text-lime-400 mr-2">
                  &gt;
                </span>
                <span className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-yellow-500 tracking-tight">
                  PromptLib
                </span>
              </div>
              <p className="text-white/60 text-sm mt-2 text-center md:text-left">
                A collection of expertly crafted prompts for AI language models
              </p>
            </div>

            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="https://thinki.sh"
                className="text-white/60 hover:text-white transition-colors flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span className="text-sm">thinki.sh</span>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} PromptLib by thinki.sh
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
