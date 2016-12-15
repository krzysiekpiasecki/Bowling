
(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Bowling" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Bowling.html">Bowling</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Bowling_BowlingGame" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Bowling/BowlingGame.html">BowlingGame</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Bowling_BowlingGame_BowlingGame" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Bowling/BowlingGame/BowlingGame.html">BowlingGame</a>                    </div>                </li>                            <li data-name="class:Bowling_BowlingGame_BowlingGameInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Bowling/BowlingGame/BowlingGameInterface.html">BowlingGameInterface</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Bowling_Frame" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Bowling/Frame.html">Frame</a>                    </div>                </li>                            <li data-name="class:Bowling_FrameInterface" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Bowling/FrameInterface.html">FrameInterface</a>                    </div>                </li>                            <li data-name="class:Bowling_FrameSequenceInterface" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Bowling/FrameSequenceInterface.html">FrameSequenceInterface</a>                    </div>                </li>                            <li data-name="class:Bowling_PointSequence" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Bowling/PointSequence.html">PointSequence</a>                    </div>                </li>                            <li data-name="class:Bowling_PointSequenceInterface" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Bowling/PointSequenceInterface.html">PointSequenceInterface</a>                    </div>                </li>                            <li data-name="class:Bowling_Roll" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Bowling/Roll.html">Roll</a>                    </div>                </li>                            <li data-name="class:Bowling_RollInterface" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Bowling/RollInterface.html">RollInterface</a>                    </div>                </li>                            <li data-name="class:Bowling_RollSequence" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Bowling/RollSequence.html">RollSequence</a>                    </div>                </li>                            <li data-name="class:Bowling_RollSequenceInterface" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Bowling/RollSequenceInterface.html">RollSequenceInterface</a>                    </div>                </li>                            <li data-name="class:Bowling_ScoreInterface" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Bowling/ScoreInterface.html">ScoreInterface</a>                    </div>                </li>                            <li data-name="class:Bowling_SequenceInterface" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Bowling/SequenceInterface.html">SequenceInterface</a>                    </div>                </li>                            <li data-name="class:Bowling_SequenceTrait" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Bowling/SequenceTrait.html">SequenceTrait</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Bowling.html", "name": "Bowling", "doc": "Namespace Bowling"},{"type": "Namespace", "link": "Bowling/BowlingGame.html", "name": "Bowling\\BowlingGame", "doc": "Namespace Bowling\\BowlingGame"},
            {"type": "Interface", "fromName": "Bowling\\BowlingGame", "fromLink": "Bowling/BowlingGame.html", "link": "Bowling/BowlingGame/BowlingGameInterface.html", "name": "Bowling\\BowlingGame\\BowlingGameInterface", "doc": "&quot;Represents a bowling game&quot;"},
                                                        {"type": "Method", "fromName": "Bowling\\BowlingGame\\BowlingGameInterface", "fromLink": "Bowling/BowlingGame/BowlingGameInterface.html", "link": "Bowling/BowlingGame/BowlingGameInterface.html#method_frameNumber", "name": "Bowling\\BowlingGame\\BowlingGameInterface::frameNumber", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bowling\\BowlingGame\\BowlingGameInterface", "fromLink": "Bowling/BowlingGame/BowlingGameInterface.html", "link": "Bowling/BowlingGame/BowlingGameInterface.html#method_rollNumber", "name": "Bowling\\BowlingGame\\BowlingGameInterface::rollNumber", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bowling\\BowlingGame\\BowlingGameInterface", "fromLink": "Bowling/BowlingGame/BowlingGameInterface.html", "link": "Bowling/BowlingGame/BowlingGameInterface.html#method_frame", "name": "Bowling\\BowlingGame\\BowlingGameInterface::frame", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bowling\\BowlingGame\\BowlingGameInterface", "fromLink": "Bowling/BowlingGame/BowlingGameInterface.html", "link": "Bowling/BowlingGame/BowlingGameInterface.html#method_totalScore", "name": "Bowling\\BowlingGame\\BowlingGameInterface::totalScore", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bowling\\BowlingGame\\BowlingGameInterface", "fromLink": "Bowling/BowlingGame/BowlingGameInterface.html", "link": "Bowling/BowlingGame/BowlingGameInterface.html#method_isFinished", "name": "Bowling\\BowlingGame\\BowlingGameInterface::isFinished", "doc": "&quot;&quot;"},
            
            {"type": "Interface", "fromName": "Bowling", "fromLink": "Bowling.html", "link": "Bowling/FrameInterface.html", "name": "Bowling\\FrameInterface", "doc": "&quot;Represents a single frame&quot;"},
                                                        {"type": "Method", "fromName": "Bowling\\FrameInterface", "fromLink": "Bowling/FrameInterface.html", "link": "Bowling/FrameInterface.html#method_score", "name": "Bowling\\FrameInterface::score", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bowling\\FrameInterface", "fromLink": "Bowling/FrameInterface.html", "link": "Bowling/FrameInterface.html#method_rollNumber", "name": "Bowling\\FrameInterface::rollNumber", "doc": "&quot;Roll with a given number&quot;"},
                    {"type": "Method", "fromName": "Bowling\\FrameInterface", "fromLink": "Bowling/FrameInterface.html", "link": "Bowling/FrameInterface.html#method_withRoll", "name": "Bowling\\FrameInterface::withRoll", "doc": "&quot;A new frame with another roll&quot;"},
                    {"type": "Method", "fromName": "Bowling\\FrameInterface", "fromLink": "Bowling/FrameInterface.html", "link": "Bowling/FrameInterface.html#method_replaceRoll", "name": "Bowling\\FrameInterface::replaceRoll", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bowling\\FrameInterface", "fromLink": "Bowling/FrameInterface.html", "link": "Bowling/FrameInterface.html#method_rollSequence", "name": "Bowling\\FrameInterface::rollSequence", "doc": "&quot;A roll sequence&quot;"},
            
            {"type": "Interface", "fromName": "Bowling", "fromLink": "Bowling.html", "link": "Bowling/FrameSequenceInterface.html", "name": "Bowling\\FrameSequenceInterface", "doc": "&quot;Represents a sequence of frames&quot;"},
                                                        {"type": "Method", "fromName": "Bowling\\FrameSequenceInterface", "fromLink": "Bowling/FrameSequenceInterface.html", "link": "Bowling/FrameSequenceInterface.html#method_frameNumber", "name": "Bowling\\FrameSequenceInterface::frameNumber", "doc": "&quot;Frame with the given number&quot;"},
                    {"type": "Method", "fromName": "Bowling\\FrameSequenceInterface", "fromLink": "Bowling/FrameSequenceInterface.html", "link": "Bowling/FrameSequenceInterface.html#method_linkFrame", "name": "Bowling\\FrameSequenceInterface::linkFrame", "doc": "&quot;Link a new frame at the end of this sequence&quot;"},
            
            {"type": "Interface", "fromName": "Bowling", "fromLink": "Bowling.html", "link": "Bowling/PointSequenceInterface.html", "name": "Bowling\\PointSequenceInterface", "doc": "&quot;Represents a sequence of points&quot;"},
                                                        {"type": "Method", "fromName": "Bowling\\PointSequenceInterface", "fromLink": "Bowling/PointSequenceInterface.html", "link": "Bowling/PointSequenceInterface.html#method_addPoints", "name": "Bowling\\PointSequenceInterface::addPoints", "doc": "&quot;Add given points to a sequence&quot;"},
                    {"type": "Method", "fromName": "Bowling\\PointSequenceInterface", "fromLink": "Bowling/PointSequenceInterface.html", "link": "Bowling/PointSequenceInterface.html#method_addPointSequence", "name": "Bowling\\PointSequenceInterface::addPointSequence", "doc": "&quot;Add points from other points sequence&quot;"},
            
            {"type": "Interface", "fromName": "Bowling", "fromLink": "Bowling.html", "link": "Bowling/RollInterface.html", "name": "Bowling\\RollInterface", "doc": "&quot;Represents a single roll&quot;"},
                                                        {"type": "Method", "fromName": "Bowling\\RollInterface", "fromLink": "Bowling/RollInterface.html", "link": "Bowling/RollInterface.html#method_pins", "name": "Bowling\\RollInterface::pins", "doc": "&quot;Number of pins knocked down&quot;"},
                    {"type": "Method", "fromName": "Bowling\\RollInterface", "fromLink": "Bowling/RollInterface.html", "link": "Bowling/RollInterface.html#method_withPoints", "name": "Bowling\\RollInterface::withPoints", "doc": "&quot;A new roll with a given points added to current score&quot;"},
                    {"type": "Method", "fromName": "Bowling\\RollInterface", "fromLink": "Bowling/RollInterface.html", "link": "Bowling/RollInterface.html#method_pointSequence", "name": "Bowling\\RollInterface::pointSequence", "doc": "&quot;A point sequence for this roll&quot;"},
                    {"type": "Method", "fromName": "Bowling\\RollInterface", "fromLink": "Bowling/RollInterface.html", "link": "Bowling/RollInterface.html#method_score", "name": "Bowling\\RollInterface::score", "doc": "&quot;Total score&quot;"},
            
            {"type": "Interface", "fromName": "Bowling", "fromLink": "Bowling.html", "link": "Bowling/RollSequenceInterface.html", "name": "Bowling\\RollSequenceInterface", "doc": "&quot;Represents a sequence of rolls&quot;"},
                                                        {"type": "Method", "fromName": "Bowling\\RollSequenceInterface", "fromLink": "Bowling/RollSequenceInterface.html", "link": "Bowling/RollSequenceInterface.html#method_rollNumber", "name": "Bowling\\RollSequenceInterface::rollNumber", "doc": "&quot;A roll with a given number&quot;"},
                    {"type": "Method", "fromName": "Bowling\\RollSequenceInterface", "fromLink": "Bowling/RollSequenceInterface.html", "link": "Bowling/RollSequenceInterface.html#method_addRoll", "name": "Bowling\\RollSequenceInterface::addRoll", "doc": "&quot;Add a new roll to a sequence&quot;"},
                    {"type": "Method", "fromName": "Bowling\\RollSequenceInterface", "fromLink": "Bowling/RollSequenceInterface.html", "link": "Bowling/RollSequenceInterface.html#method_addRollSequence", "name": "Bowling\\RollSequenceInterface::addRollSequence", "doc": "&quot;Add a new roll sequence to a sequence&quot;"},
                    {"type": "Method", "fromName": "Bowling\\RollSequenceInterface", "fromLink": "Bowling/RollSequenceInterface.html", "link": "Bowling/RollSequenceInterface.html#method_count", "name": "Bowling\\RollSequenceInterface::count", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bowling\\RollSequenceInterface", "fromLink": "Bowling/RollSequenceInterface.html", "link": "Bowling/RollSequenceInterface.html#method_getIterator", "name": "Bowling\\RollSequenceInterface::getIterator", "doc": "&quot;&quot;"},
            
            {"type": "Interface", "fromName": "Bowling", "fromLink": "Bowling.html", "link": "Bowling/ScoreInterface.html", "name": "Bowling\\ScoreInterface", "doc": "&quot;Represents an instance with a score points&quot;"},
                                                        {"type": "Method", "fromName": "Bowling\\ScoreInterface", "fromLink": "Bowling/ScoreInterface.html", "link": "Bowling/ScoreInterface.html#method_score", "name": "Bowling\\ScoreInterface::score", "doc": "&quot;A score points&quot;"},
            
            {"type": "Interface", "fromName": "Bowling", "fromLink": "Bowling.html", "link": "Bowling/SequenceInterface.html", "name": "Bowling\\SequenceInterface", "doc": "&quot;Represents a sequence of elements&quot;"},
                                                        {"type": "Method", "fromName": "Bowling\\SequenceInterface", "fromLink": "Bowling/SequenceInterface.html", "link": "Bowling/SequenceInterface.html#method_count", "name": "Bowling\\SequenceInterface::count", "doc": "&quot;Number of sequence elements&quot;"},
                    {"type": "Method", "fromName": "Bowling\\SequenceInterface", "fromLink": "Bowling/SequenceInterface.html", "link": "Bowling/SequenceInterface.html#method_getIterator", "name": "Bowling\\SequenceInterface::getIterator", "doc": "&quot;A sequence element iterator&quot;"},
            
            
            {"type": "Class", "fromName": "Bowling\\BowlingGame", "fromLink": "Bowling/BowlingGame.html", "link": "Bowling/BowlingGame/BowlingGame.html", "name": "Bowling\\BowlingGame\\BowlingGame", "doc": "&quot;A Bowling game engine.&quot;"},
                                                        {"type": "Method", "fromName": "Bowling\\BowlingGame\\BowlingGame", "fromLink": "Bowling/BowlingGame/BowlingGame.html", "link": "Bowling/BowlingGame/BowlingGame.html#method___construct", "name": "Bowling\\BowlingGame\\BowlingGame::__construct", "doc": "&quot;A new BowlingGame&quot;"},
                    {"type": "Method", "fromName": "Bowling\\BowlingGame\\BowlingGame", "fromLink": "Bowling/BowlingGame/BowlingGame.html", "link": "Bowling/BowlingGame/BowlingGame.html#method_roll", "name": "Bowling\\BowlingGame\\BowlingGame::roll", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bowling\\BowlingGame\\BowlingGame", "fromLink": "Bowling/BowlingGame/BowlingGame.html", "link": "Bowling/BowlingGame/BowlingGame.html#method_score", "name": "Bowling\\BowlingGame\\BowlingGame::score", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bowling\\BowlingGame\\BowlingGame", "fromLink": "Bowling/BowlingGame/BowlingGame.html", "link": "Bowling/BowlingGame/BowlingGame.html#method_printGame", "name": "Bowling\\BowlingGame\\BowlingGame::printGame", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bowling\\BowlingGame\\BowlingGame", "fromLink": "Bowling/BowlingGame/BowlingGame.html", "link": "Bowling/BowlingGame/BowlingGame.html#method_isFinished", "name": "Bowling\\BowlingGame\\BowlingGame::isFinished", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Bowling\\BowlingGame", "fromLink": "Bowling/BowlingGame.html", "link": "Bowling/BowlingGame/BowlingGameInterface.html", "name": "Bowling\\BowlingGame\\BowlingGameInterface", "doc": "&quot;Represents a bowling game&quot;"},
                                                        {"type": "Method", "fromName": "Bowling\\BowlingGame\\BowlingGameInterface", "fromLink": "Bowling/BowlingGame/BowlingGameInterface.html", "link": "Bowling/BowlingGame/BowlingGameInterface.html#method_frameNumber", "name": "Bowling\\BowlingGame\\BowlingGameInterface::frameNumber", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bowling\\BowlingGame\\BowlingGameInterface", "fromLink": "Bowling/BowlingGame/BowlingGameInterface.html", "link": "Bowling/BowlingGame/BowlingGameInterface.html#method_rollNumber", "name": "Bowling\\BowlingGame\\BowlingGameInterface::rollNumber", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bowling\\BowlingGame\\BowlingGameInterface", "fromLink": "Bowling/BowlingGame/BowlingGameInterface.html", "link": "Bowling/BowlingGame/BowlingGameInterface.html#method_frame", "name": "Bowling\\BowlingGame\\BowlingGameInterface::frame", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bowling\\BowlingGame\\BowlingGameInterface", "fromLink": "Bowling/BowlingGame/BowlingGameInterface.html", "link": "Bowling/BowlingGame/BowlingGameInterface.html#method_totalScore", "name": "Bowling\\BowlingGame\\BowlingGameInterface::totalScore", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bowling\\BowlingGame\\BowlingGameInterface", "fromLink": "Bowling/BowlingGame/BowlingGameInterface.html", "link": "Bowling/BowlingGame/BowlingGameInterface.html#method_isFinished", "name": "Bowling\\BowlingGame\\BowlingGameInterface::isFinished", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Bowling", "fromLink": "Bowling.html", "link": "Bowling/Frame.html", "name": "Bowling\\Frame", "doc": "&quot;Represents a single frame&quot;"},
                                                        {"type": "Method", "fromName": "Bowling\\Frame", "fromLink": "Bowling/Frame.html", "link": "Bowling/Frame.html#method___construct", "name": "Bowling\\Frame::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bowling\\Frame", "fromLink": "Bowling/Frame.html", "link": "Bowling/Frame.html#method_score", "name": "Bowling\\Frame::score", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bowling\\Frame", "fromLink": "Bowling/Frame.html", "link": "Bowling/Frame.html#method_withRoll", "name": "Bowling\\Frame::withRoll", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bowling\\Frame", "fromLink": "Bowling/Frame.html", "link": "Bowling/Frame.html#method_rollSequence", "name": "Bowling\\Frame::rollSequence", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bowling\\Frame", "fromLink": "Bowling/Frame.html", "link": "Bowling/Frame.html#method_rollNumber", "name": "Bowling\\Frame::rollNumber", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bowling\\Frame", "fromLink": "Bowling/Frame.html", "link": "Bowling/Frame.html#method_replaceRoll", "name": "Bowling\\Frame::replaceRoll", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Bowling", "fromLink": "Bowling.html", "link": "Bowling/FrameInterface.html", "name": "Bowling\\FrameInterface", "doc": "&quot;Represents a single frame&quot;"},
                                                        {"type": "Method", "fromName": "Bowling\\FrameInterface", "fromLink": "Bowling/FrameInterface.html", "link": "Bowling/FrameInterface.html#method_score", "name": "Bowling\\FrameInterface::score", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bowling\\FrameInterface", "fromLink": "Bowling/FrameInterface.html", "link": "Bowling/FrameInterface.html#method_rollNumber", "name": "Bowling\\FrameInterface::rollNumber", "doc": "&quot;Roll with a given number&quot;"},
                    {"type": "Method", "fromName": "Bowling\\FrameInterface", "fromLink": "Bowling/FrameInterface.html", "link": "Bowling/FrameInterface.html#method_withRoll", "name": "Bowling\\FrameInterface::withRoll", "doc": "&quot;A new frame with another roll&quot;"},
                    {"type": "Method", "fromName": "Bowling\\FrameInterface", "fromLink": "Bowling/FrameInterface.html", "link": "Bowling/FrameInterface.html#method_replaceRoll", "name": "Bowling\\FrameInterface::replaceRoll", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bowling\\FrameInterface", "fromLink": "Bowling/FrameInterface.html", "link": "Bowling/FrameInterface.html#method_rollSequence", "name": "Bowling\\FrameInterface::rollSequence", "doc": "&quot;A roll sequence&quot;"},
            
            {"type": "Class", "fromName": "Bowling", "fromLink": "Bowling.html", "link": "Bowling/FrameSequenceInterface.html", "name": "Bowling\\FrameSequenceInterface", "doc": "&quot;Represents a sequence of frames&quot;"},
                                                        {"type": "Method", "fromName": "Bowling\\FrameSequenceInterface", "fromLink": "Bowling/FrameSequenceInterface.html", "link": "Bowling/FrameSequenceInterface.html#method_frameNumber", "name": "Bowling\\FrameSequenceInterface::frameNumber", "doc": "&quot;Frame with the given number&quot;"},
                    {"type": "Method", "fromName": "Bowling\\FrameSequenceInterface", "fromLink": "Bowling/FrameSequenceInterface.html", "link": "Bowling/FrameSequenceInterface.html#method_linkFrame", "name": "Bowling\\FrameSequenceInterface::linkFrame", "doc": "&quot;Link a new frame at the end of this sequence&quot;"},
            
            {"type": "Class", "fromName": "Bowling", "fromLink": "Bowling.html", "link": "Bowling/PointSequence.html", "name": "Bowling\\PointSequence", "doc": "&quot;Represents a sequence of points&quot;"},
                                                        {"type": "Method", "fromName": "Bowling\\PointSequence", "fromLink": "Bowling/PointSequence.html", "link": "Bowling/PointSequence.html#method___construct", "name": "Bowling\\PointSequence::__construct", "doc": "&quot;New points sequence with optional initial sequence of points&quot;"},
                    {"type": "Method", "fromName": "Bowling\\PointSequence", "fromLink": "Bowling/PointSequence.html", "link": "Bowling/PointSequence.html#method_addPoints", "name": "Bowling\\PointSequence::addPoints", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bowling\\PointSequence", "fromLink": "Bowling/PointSequence.html", "link": "Bowling/PointSequence.html#method_addPointSequence", "name": "Bowling\\PointSequence::addPointSequence", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Bowling", "fromLink": "Bowling.html", "link": "Bowling/PointSequenceInterface.html", "name": "Bowling\\PointSequenceInterface", "doc": "&quot;Represents a sequence of points&quot;"},
                                                        {"type": "Method", "fromName": "Bowling\\PointSequenceInterface", "fromLink": "Bowling/PointSequenceInterface.html", "link": "Bowling/PointSequenceInterface.html#method_addPoints", "name": "Bowling\\PointSequenceInterface::addPoints", "doc": "&quot;Add given points to a sequence&quot;"},
                    {"type": "Method", "fromName": "Bowling\\PointSequenceInterface", "fromLink": "Bowling/PointSequenceInterface.html", "link": "Bowling/PointSequenceInterface.html#method_addPointSequence", "name": "Bowling\\PointSequenceInterface::addPointSequence", "doc": "&quot;Add points from other points sequence&quot;"},
            
            {"type": "Class", "fromName": "Bowling", "fromLink": "Bowling.html", "link": "Bowling/Roll.html", "name": "Bowling\\Roll", "doc": "&quot;Represents a single roll&quot;"},
                                                        {"type": "Method", "fromName": "Bowling\\Roll", "fromLink": "Bowling/Roll.html", "link": "Bowling/Roll.html#method___construct", "name": "Bowling\\Roll::__construct", "doc": "&quot;A new roll with number of pins knocked down&quot;"},
                    {"type": "Method", "fromName": "Bowling\\Roll", "fromLink": "Bowling/Roll.html", "link": "Bowling/Roll.html#method_pins", "name": "Bowling\\Roll::pins", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bowling\\Roll", "fromLink": "Bowling/Roll.html", "link": "Bowling/Roll.html#method_withPoints", "name": "Bowling\\Roll::withPoints", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bowling\\Roll", "fromLink": "Bowling/Roll.html", "link": "Bowling/Roll.html#method_pointSequence", "name": "Bowling\\Roll::pointSequence", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bowling\\Roll", "fromLink": "Bowling/Roll.html", "link": "Bowling/Roll.html#method_score", "name": "Bowling\\Roll::score", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Bowling", "fromLink": "Bowling.html", "link": "Bowling/RollInterface.html", "name": "Bowling\\RollInterface", "doc": "&quot;Represents a single roll&quot;"},
                                                        {"type": "Method", "fromName": "Bowling\\RollInterface", "fromLink": "Bowling/RollInterface.html", "link": "Bowling/RollInterface.html#method_pins", "name": "Bowling\\RollInterface::pins", "doc": "&quot;Number of pins knocked down&quot;"},
                    {"type": "Method", "fromName": "Bowling\\RollInterface", "fromLink": "Bowling/RollInterface.html", "link": "Bowling/RollInterface.html#method_withPoints", "name": "Bowling\\RollInterface::withPoints", "doc": "&quot;A new roll with a given points added to current score&quot;"},
                    {"type": "Method", "fromName": "Bowling\\RollInterface", "fromLink": "Bowling/RollInterface.html", "link": "Bowling/RollInterface.html#method_pointSequence", "name": "Bowling\\RollInterface::pointSequence", "doc": "&quot;A point sequence for this roll&quot;"},
                    {"type": "Method", "fromName": "Bowling\\RollInterface", "fromLink": "Bowling/RollInterface.html", "link": "Bowling/RollInterface.html#method_score", "name": "Bowling\\RollInterface::score", "doc": "&quot;Total score&quot;"},
            
            {"type": "Class", "fromName": "Bowling", "fromLink": "Bowling.html", "link": "Bowling/RollSequence.html", "name": "Bowling\\RollSequence", "doc": "&quot;Represents a sequence of rolls&quot;"},
                                                        {"type": "Method", "fromName": "Bowling\\RollSequence", "fromLink": "Bowling/RollSequence.html", "link": "Bowling/RollSequence.html#method___construct", "name": "Bowling\\RollSequence::__construct", "doc": "&quot;New roll sequence with a given sequence of rolls&quot;"},
                    {"type": "Method", "fromName": "Bowling\\RollSequence", "fromLink": "Bowling/RollSequence.html", "link": "Bowling/RollSequence.html#method_rollNumber", "name": "Bowling\\RollSequence::rollNumber", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bowling\\RollSequence", "fromLink": "Bowling/RollSequence.html", "link": "Bowling/RollSequence.html#method_addRoll", "name": "Bowling\\RollSequence::addRoll", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bowling\\RollSequence", "fromLink": "Bowling/RollSequence.html", "link": "Bowling/RollSequence.html#method_addRollSequence", "name": "Bowling\\RollSequence::addRollSequence", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Bowling", "fromLink": "Bowling.html", "link": "Bowling/RollSequenceInterface.html", "name": "Bowling\\RollSequenceInterface", "doc": "&quot;Represents a sequence of rolls&quot;"},
                                                        {"type": "Method", "fromName": "Bowling\\RollSequenceInterface", "fromLink": "Bowling/RollSequenceInterface.html", "link": "Bowling/RollSequenceInterface.html#method_rollNumber", "name": "Bowling\\RollSequenceInterface::rollNumber", "doc": "&quot;A roll with a given number&quot;"},
                    {"type": "Method", "fromName": "Bowling\\RollSequenceInterface", "fromLink": "Bowling/RollSequenceInterface.html", "link": "Bowling/RollSequenceInterface.html#method_addRoll", "name": "Bowling\\RollSequenceInterface::addRoll", "doc": "&quot;Add a new roll to a sequence&quot;"},
                    {"type": "Method", "fromName": "Bowling\\RollSequenceInterface", "fromLink": "Bowling/RollSequenceInterface.html", "link": "Bowling/RollSequenceInterface.html#method_addRollSequence", "name": "Bowling\\RollSequenceInterface::addRollSequence", "doc": "&quot;Add a new roll sequence to a sequence&quot;"},
                    {"type": "Method", "fromName": "Bowling\\RollSequenceInterface", "fromLink": "Bowling/RollSequenceInterface.html", "link": "Bowling/RollSequenceInterface.html#method_count", "name": "Bowling\\RollSequenceInterface::count", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bowling\\RollSequenceInterface", "fromLink": "Bowling/RollSequenceInterface.html", "link": "Bowling/RollSequenceInterface.html#method_getIterator", "name": "Bowling\\RollSequenceInterface::getIterator", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Bowling", "fromLink": "Bowling.html", "link": "Bowling/ScoreInterface.html", "name": "Bowling\\ScoreInterface", "doc": "&quot;Represents an instance with a score points&quot;"},
                                                        {"type": "Method", "fromName": "Bowling\\ScoreInterface", "fromLink": "Bowling/ScoreInterface.html", "link": "Bowling/ScoreInterface.html#method_score", "name": "Bowling\\ScoreInterface::score", "doc": "&quot;A score points&quot;"},
            
            {"type": "Class", "fromName": "Bowling", "fromLink": "Bowling.html", "link": "Bowling/SequenceInterface.html", "name": "Bowling\\SequenceInterface", "doc": "&quot;Represents a sequence of elements&quot;"},
                                                        {"type": "Method", "fromName": "Bowling\\SequenceInterface", "fromLink": "Bowling/SequenceInterface.html", "link": "Bowling/SequenceInterface.html#method_count", "name": "Bowling\\SequenceInterface::count", "doc": "&quot;Number of sequence elements&quot;"},
                    {"type": "Method", "fromName": "Bowling\\SequenceInterface", "fromLink": "Bowling/SequenceInterface.html", "link": "Bowling/SequenceInterface.html#method_getIterator", "name": "Bowling\\SequenceInterface::getIterator", "doc": "&quot;A sequence element iterator&quot;"},
            
            {"type": "Trait", "fromName": "Bowling", "fromLink": "Bowling.html", "link": "Bowling/SequenceTrait.html", "name": "Bowling\\SequenceTrait", "doc": "&quot;Represents a sequence of elements&quot;"},
                                                        {"type": "Method", "fromName": "Bowling\\SequenceTrait", "fromLink": "Bowling/SequenceTrait.html", "link": "Bowling/SequenceTrait.html#method_count", "name": "Bowling\\SequenceTrait::count", "doc": "&quot;Number of sequence elements&quot;"},
                    {"type": "Method", "fromName": "Bowling\\SequenceTrait", "fromLink": "Bowling/SequenceTrait.html", "link": "Bowling/SequenceTrait.html#method_getIterator", "name": "Bowling\\SequenceTrait::getIterator", "doc": "&quot;A sequence element iterator&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


