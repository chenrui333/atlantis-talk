on run argv
  set sourceFile to POSIX file (item 1 of argv)
  set targetFile to item 2 of argv
  tell application "Microsoft PowerPoint"
    open sourceFile
    set talkDeck to active presentation
    set slideCount to count of slides of talkDeck
    save talkDeck in targetFile as save as PDF
    close talkDeck saving no
    return slideCount
  end tell
end run
