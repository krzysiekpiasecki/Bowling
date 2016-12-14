
(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">KrzysiekPiasecki</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:KrzysiekPiasecki_Bowling" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="KrzysiekPiasecki/Bowling.html">Bowling</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:KrzysiekPiasecki_Bowling_BowlingGame" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="KrzysiekPiasecki/Bowling/BowlingGame.html">BowlingGame</a>                    </div>                </li>                            <li data-name="class:KrzysiekPiasecki_Bowling_BowlingGameInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="KrzysiekPiasecki/Bowling/BowlingGameInterface.html">BowlingGameInterface</a>                    </div>                </li>                            <li data-name="class:KrzysiekPiasecki_Bowling_Frame" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="KrzysiekPiasecki/Bowling/Frame.html">Frame</a>                    </div>                </li>                            <li data-name="class:KrzysiekPiasecki_Bowling_FrameInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="KrzysiekPiasecki/Bowling/FrameInterface.html">FrameInterface</a>                    </div>                </li>                            <li data-name="class:KrzysiekPiasecki_Bowling_FrameSequenceInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="KrzysiekPiasecki/Bowling/FrameSequenceInterface.html">FrameSequenceInterface</a>                    </div>                </li>                            <li data-name="class:KrzysiekPiasecki_Bowling_PointSequence" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="KrzysiekPiasecki/Bowling/PointSequence.html">PointSequence</a>                    </div>                </li>                            <li data-name="class:KrzysiekPiasecki_Bowling_PointSequenceInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="KrzysiekPiasecki/Bowling/PointSequenceInterface.html">PointSequenceInterface</a>                    </div>                </li>                            <li data-name="class:KrzysiekPiasecki_Bowling_Roll" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="KrzysiekPiasecki/Bowling/Roll.html">Roll</a>                    </div>                </li>                            <li data-name="class:KrzysiekPiasecki_Bowling_RollInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="KrzysiekPiasecki/Bowling/RollInterface.html">RollInterface</a>                    </div>                </li>                            <li data-name="class:KrzysiekPiasecki_Bowling_RollSequence" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="KrzysiekPiasecki/Bowling/RollSequence.html">RollSequence</a>                    </div>                </li>                            <li data-name="class:KrzysiekPiasecki_Bowling_RollSequenceInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="KrzysiekPiasecki/Bowling/RollSequenceInterface.html">RollSequenceInterface</a>                    </div>                </li>                            <li data-name="class:KrzysiekPiasecki_Bowling_ScoreInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="KrzysiekPiasecki/Bowling/ScoreInterface.html">ScoreInterface</a>                    </div>                </li>                            <li data-name="class:KrzysiekPiasecki_Bowling_SequenceInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="KrzysiekPiasecki/Bowling/SequenceInterface.html">SequenceInterface</a>                    </div>                </li>                            <li data-name="class:KrzysiekPiasecki_Bowling_SequenceTrait" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="KrzysiekPiasecki/Bowling/SequenceTrait.html">SequenceTrait</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "KrzysiekPiasecki.html", "name": "KrzysiekPiasecki", "doc": "Namespace KrzysiekPiasecki"},{"type": "Namespace", "link": "KrzysiekPiasecki/Bowling.html", "name": "KrzysiekPiasecki\\Bowling", "doc": "Namespace KrzysiekPiasecki\\Bowling"},
            {"type": "Interface", "fromName": "KrzysiekPiasecki\\Bowling", "fromLink": "KrzysiekPiasecki/Bowling.html", "link": "KrzysiekPiasecki/Bowling/BowlingGameInterface.html", "name": "KrzysiekPiasecki\\Bowling\\BowlingGameInterface", "doc": "&quot;Represents a bowling game&quot;"},
                                                        {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\BowlingGameInterface", "fromLink": "KrzysiekPiasecki/Bowling/BowlingGameInterface.html", "link": "KrzysiekPiasecki/Bowling/BowlingGameInterface.html#method_frameNumber", "name": "KrzysiekPiasecki\\Bowling\\BowlingGameInterface::frameNumber", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\BowlingGameInterface", "fromLink": "KrzysiekPiasecki/Bowling/BowlingGameInterface.html", "link": "KrzysiekPiasecki/Bowling/BowlingGameInterface.html#method_rollNumber", "name": "KrzysiekPiasecki\\Bowling\\BowlingGameInterface::rollNumber", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\BowlingGameInterface", "fromLink": "KrzysiekPiasecki/Bowling/BowlingGameInterface.html", "link": "KrzysiekPiasecki/Bowling/BowlingGameInterface.html#method_frame", "name": "KrzysiekPiasecki\\Bowling\\BowlingGameInterface::frame", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\BowlingGameInterface", "fromLink": "KrzysiekPiasecki/Bowling/BowlingGameInterface.html", "link": "KrzysiekPiasecki/Bowling/BowlingGameInterface.html#method_totalScore", "name": "KrzysiekPiasecki\\Bowling\\BowlingGameInterface::totalScore", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\BowlingGameInterface", "fromLink": "KrzysiekPiasecki/Bowling/BowlingGameInterface.html", "link": "KrzysiekPiasecki/Bowling/BowlingGameInterface.html#method_isFinished", "name": "KrzysiekPiasecki\\Bowling\\BowlingGameInterface::isFinished", "doc": "&quot;&quot;"},
            
            {"type": "Interface", "fromName": "KrzysiekPiasecki\\Bowling", "fromLink": "KrzysiekPiasecki/Bowling.html", "link": "KrzysiekPiasecki/Bowling/FrameInterface.html", "name": "KrzysiekPiasecki\\Bowling\\FrameInterface", "doc": "&quot;Represents a single frame&quot;"},
                                                        {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\FrameInterface", "fromLink": "KrzysiekPiasecki/Bowling/FrameInterface.html", "link": "KrzysiekPiasecki/Bowling/FrameInterface.html#method_score", "name": "KrzysiekPiasecki\\Bowling\\FrameInterface::score", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\FrameInterface", "fromLink": "KrzysiekPiasecki/Bowling/FrameInterface.html", "link": "KrzysiekPiasecki/Bowling/FrameInterface.html#method_rollNumber", "name": "KrzysiekPiasecki\\Bowling\\FrameInterface::rollNumber", "doc": "&quot;Roll with a given number&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\FrameInterface", "fromLink": "KrzysiekPiasecki/Bowling/FrameInterface.html", "link": "KrzysiekPiasecki/Bowling/FrameInterface.html#method_withRoll", "name": "KrzysiekPiasecki\\Bowling\\FrameInterface::withRoll", "doc": "&quot;A new frame with another roll&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\FrameInterface", "fromLink": "KrzysiekPiasecki/Bowling/FrameInterface.html", "link": "KrzysiekPiasecki/Bowling/FrameInterface.html#method_replaceRoll", "name": "KrzysiekPiasecki\\Bowling\\FrameInterface::replaceRoll", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\FrameInterface", "fromLink": "KrzysiekPiasecki/Bowling/FrameInterface.html", "link": "KrzysiekPiasecki/Bowling/FrameInterface.html#method_rollSequence", "name": "KrzysiekPiasecki\\Bowling\\FrameInterface::rollSequence", "doc": "&quot;A roll sequence&quot;"},
            
            {"type": "Interface", "fromName": "KrzysiekPiasecki\\Bowling", "fromLink": "KrzysiekPiasecki/Bowling.html", "link": "KrzysiekPiasecki/Bowling/FrameSequenceInterface.html", "name": "KrzysiekPiasecki\\Bowling\\FrameSequenceInterface", "doc": "&quot;Represents a sequence of frames&quot;"},
                                                        {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\FrameSequenceInterface", "fromLink": "KrzysiekPiasecki/Bowling/FrameSequenceInterface.html", "link": "KrzysiekPiasecki/Bowling/FrameSequenceInterface.html#method_frameNumber", "name": "KrzysiekPiasecki\\Bowling\\FrameSequenceInterface::frameNumber", "doc": "&quot;Frame with the given number&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\FrameSequenceInterface", "fromLink": "KrzysiekPiasecki/Bowling/FrameSequenceInterface.html", "link": "KrzysiekPiasecki/Bowling/FrameSequenceInterface.html#method_linkFrame", "name": "KrzysiekPiasecki\\Bowling\\FrameSequenceInterface::linkFrame", "doc": "&quot;Link a new frame at the end of this sequence&quot;"},
            
            {"type": "Interface", "fromName": "KrzysiekPiasecki\\Bowling", "fromLink": "KrzysiekPiasecki/Bowling.html", "link": "KrzysiekPiasecki/Bowling/PointSequenceInterface.html", "name": "KrzysiekPiasecki\\Bowling\\PointSequenceInterface", "doc": "&quot;Represents a sequence of points&quot;"},
                                                        {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\PointSequenceInterface", "fromLink": "KrzysiekPiasecki/Bowling/PointSequenceInterface.html", "link": "KrzysiekPiasecki/Bowling/PointSequenceInterface.html#method_addPoints", "name": "KrzysiekPiasecki\\Bowling\\PointSequenceInterface::addPoints", "doc": "&quot;Add given points to a sequence&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\PointSequenceInterface", "fromLink": "KrzysiekPiasecki/Bowling/PointSequenceInterface.html", "link": "KrzysiekPiasecki/Bowling/PointSequenceInterface.html#method_addPointSequence", "name": "KrzysiekPiasecki\\Bowling\\PointSequenceInterface::addPointSequence", "doc": "&quot;Add points from other points sequence&quot;"},
            
            {"type": "Interface", "fromName": "KrzysiekPiasecki\\Bowling", "fromLink": "KrzysiekPiasecki/Bowling.html", "link": "KrzysiekPiasecki/Bowling/RollInterface.html", "name": "KrzysiekPiasecki\\Bowling\\RollInterface", "doc": "&quot;Represents a single roll&quot;"},
                                                        {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\RollInterface", "fromLink": "KrzysiekPiasecki/Bowling/RollInterface.html", "link": "KrzysiekPiasecki/Bowling/RollInterface.html#method_pins", "name": "KrzysiekPiasecki\\Bowling\\RollInterface::pins", "doc": "&quot;Number of pins knocked down&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\RollInterface", "fromLink": "KrzysiekPiasecki/Bowling/RollInterface.html", "link": "KrzysiekPiasecki/Bowling/RollInterface.html#method_withPoints", "name": "KrzysiekPiasecki\\Bowling\\RollInterface::withPoints", "doc": "&quot;A new roll with a given points added to current score&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\RollInterface", "fromLink": "KrzysiekPiasecki/Bowling/RollInterface.html", "link": "KrzysiekPiasecki/Bowling/RollInterface.html#method_pointSequence", "name": "KrzysiekPiasecki\\Bowling\\RollInterface::pointSequence", "doc": "&quot;A point sequence for this roll&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\RollInterface", "fromLink": "KrzysiekPiasecki/Bowling/RollInterface.html", "link": "KrzysiekPiasecki/Bowling/RollInterface.html#method_score", "name": "KrzysiekPiasecki\\Bowling\\RollInterface::score", "doc": "&quot;Total score&quot;"},
            
            {"type": "Interface", "fromName": "KrzysiekPiasecki\\Bowling", "fromLink": "KrzysiekPiasecki/Bowling.html", "link": "KrzysiekPiasecki/Bowling/RollSequenceInterface.html", "name": "KrzysiekPiasecki\\Bowling\\RollSequenceInterface", "doc": "&quot;Represents a sequence of rolls&quot;"},
                                                        {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\RollSequenceInterface", "fromLink": "KrzysiekPiasecki/Bowling/RollSequenceInterface.html", "link": "KrzysiekPiasecki/Bowling/RollSequenceInterface.html#method_rollNumber", "name": "KrzysiekPiasecki\\Bowling\\RollSequenceInterface::rollNumber", "doc": "&quot;A roll with a given number&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\RollSequenceInterface", "fromLink": "KrzysiekPiasecki/Bowling/RollSequenceInterface.html", "link": "KrzysiekPiasecki/Bowling/RollSequenceInterface.html#method_appendRoll", "name": "KrzysiekPiasecki\\Bowling\\RollSequenceInterface::appendRoll", "doc": "&quot;Append a new roll&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\RollSequenceInterface", "fromLink": "KrzysiekPiasecki/Bowling/RollSequenceInterface.html", "link": "KrzysiekPiasecki/Bowling/RollSequenceInterface.html#method_count", "name": "KrzysiekPiasecki\\Bowling\\RollSequenceInterface::count", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\RollSequenceInterface", "fromLink": "KrzysiekPiasecki/Bowling/RollSequenceInterface.html", "link": "KrzysiekPiasecki/Bowling/RollSequenceInterface.html#method_getIterator", "name": "KrzysiekPiasecki\\Bowling\\RollSequenceInterface::getIterator", "doc": "&quot;&quot;"},
            
            {"type": "Interface", "fromName": "KrzysiekPiasecki\\Bowling", "fromLink": "KrzysiekPiasecki/Bowling.html", "link": "KrzysiekPiasecki/Bowling/ScoreInterface.html", "name": "KrzysiekPiasecki\\Bowling\\ScoreInterface", "doc": "&quot;Represents an instance with a score points&quot;"},
                                                        {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\ScoreInterface", "fromLink": "KrzysiekPiasecki/Bowling/ScoreInterface.html", "link": "KrzysiekPiasecki/Bowling/ScoreInterface.html#method_score", "name": "KrzysiekPiasecki\\Bowling\\ScoreInterface::score", "doc": "&quot;A score points&quot;"},
            
            {"type": "Interface", "fromName": "KrzysiekPiasecki\\Bowling", "fromLink": "KrzysiekPiasecki/Bowling.html", "link": "KrzysiekPiasecki/Bowling/SequenceInterface.html", "name": "KrzysiekPiasecki\\Bowling\\SequenceInterface", "doc": "&quot;Represents a sequence of elements&quot;"},
                                                        {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\SequenceInterface", "fromLink": "KrzysiekPiasecki/Bowling/SequenceInterface.html", "link": "KrzysiekPiasecki/Bowling/SequenceInterface.html#method_count", "name": "KrzysiekPiasecki\\Bowling\\SequenceInterface::count", "doc": "&quot;Number of sequence elements&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\SequenceInterface", "fromLink": "KrzysiekPiasecki/Bowling/SequenceInterface.html", "link": "KrzysiekPiasecki/Bowling/SequenceInterface.html#method_getIterator", "name": "KrzysiekPiasecki\\Bowling\\SequenceInterface::getIterator", "doc": "&quot;A sequence element iterator&quot;"},
            
            
            {"type": "Class", "fromName": "KrzysiekPiasecki\\Bowling", "fromLink": "KrzysiekPiasecki/Bowling.html", "link": "KrzysiekPiasecki/Bowling/BowlingGame.html", "name": "KrzysiekPiasecki\\Bowling\\BowlingGame", "doc": "&quot;A Bowling game engine.&quot;"},
                                                        {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\BowlingGame", "fromLink": "KrzysiekPiasecki/Bowling/BowlingGame.html", "link": "KrzysiekPiasecki/Bowling/BowlingGame.html#method___construct", "name": "KrzysiekPiasecki\\Bowling\\BowlingGame::__construct", "doc": "&quot;A new BowlingGame&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\BowlingGame", "fromLink": "KrzysiekPiasecki/Bowling/BowlingGame.html", "link": "KrzysiekPiasecki/Bowling/BowlingGame.html#method_roll", "name": "KrzysiekPiasecki\\Bowling\\BowlingGame::roll", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\BowlingGame", "fromLink": "KrzysiekPiasecki/Bowling/BowlingGame.html", "link": "KrzysiekPiasecki/Bowling/BowlingGame.html#method_score", "name": "KrzysiekPiasecki\\Bowling\\BowlingGame::score", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\BowlingGame", "fromLink": "KrzysiekPiasecki/Bowling/BowlingGame.html", "link": "KrzysiekPiasecki/Bowling/BowlingGame.html#method_printGame", "name": "KrzysiekPiasecki\\Bowling\\BowlingGame::printGame", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\BowlingGame", "fromLink": "KrzysiekPiasecki/Bowling/BowlingGame.html", "link": "KrzysiekPiasecki/Bowling/BowlingGame.html#method_isFinished", "name": "KrzysiekPiasecki\\Bowling\\BowlingGame::isFinished", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "KrzysiekPiasecki\\Bowling", "fromLink": "KrzysiekPiasecki/Bowling.html", "link": "KrzysiekPiasecki/Bowling/BowlingGameInterface.html", "name": "KrzysiekPiasecki\\Bowling\\BowlingGameInterface", "doc": "&quot;Represents a bowling game&quot;"},
                                                        {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\BowlingGameInterface", "fromLink": "KrzysiekPiasecki/Bowling/BowlingGameInterface.html", "link": "KrzysiekPiasecki/Bowling/BowlingGameInterface.html#method_frameNumber", "name": "KrzysiekPiasecki\\Bowling\\BowlingGameInterface::frameNumber", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\BowlingGameInterface", "fromLink": "KrzysiekPiasecki/Bowling/BowlingGameInterface.html", "link": "KrzysiekPiasecki/Bowling/BowlingGameInterface.html#method_rollNumber", "name": "KrzysiekPiasecki\\Bowling\\BowlingGameInterface::rollNumber", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\BowlingGameInterface", "fromLink": "KrzysiekPiasecki/Bowling/BowlingGameInterface.html", "link": "KrzysiekPiasecki/Bowling/BowlingGameInterface.html#method_frame", "name": "KrzysiekPiasecki\\Bowling\\BowlingGameInterface::frame", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\BowlingGameInterface", "fromLink": "KrzysiekPiasecki/Bowling/BowlingGameInterface.html", "link": "KrzysiekPiasecki/Bowling/BowlingGameInterface.html#method_totalScore", "name": "KrzysiekPiasecki\\Bowling\\BowlingGameInterface::totalScore", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\BowlingGameInterface", "fromLink": "KrzysiekPiasecki/Bowling/BowlingGameInterface.html", "link": "KrzysiekPiasecki/Bowling/BowlingGameInterface.html#method_isFinished", "name": "KrzysiekPiasecki\\Bowling\\BowlingGameInterface::isFinished", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "KrzysiekPiasecki\\Bowling", "fromLink": "KrzysiekPiasecki/Bowling.html", "link": "KrzysiekPiasecki/Bowling/Frame.html", "name": "KrzysiekPiasecki\\Bowling\\Frame", "doc": "&quot;Represents a single frame&quot;"},
                                                        {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\Frame", "fromLink": "KrzysiekPiasecki/Bowling/Frame.html", "link": "KrzysiekPiasecki/Bowling/Frame.html#method___construct", "name": "KrzysiekPiasecki\\Bowling\\Frame::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\Frame", "fromLink": "KrzysiekPiasecki/Bowling/Frame.html", "link": "KrzysiekPiasecki/Bowling/Frame.html#method_score", "name": "KrzysiekPiasecki\\Bowling\\Frame::score", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\Frame", "fromLink": "KrzysiekPiasecki/Bowling/Frame.html", "link": "KrzysiekPiasecki/Bowling/Frame.html#method_withRoll", "name": "KrzysiekPiasecki\\Bowling\\Frame::withRoll", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\Frame", "fromLink": "KrzysiekPiasecki/Bowling/Frame.html", "link": "KrzysiekPiasecki/Bowling/Frame.html#method_rollSequence", "name": "KrzysiekPiasecki\\Bowling\\Frame::rollSequence", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\Frame", "fromLink": "KrzysiekPiasecki/Bowling/Frame.html", "link": "KrzysiekPiasecki/Bowling/Frame.html#method_rollNumber", "name": "KrzysiekPiasecki\\Bowling\\Frame::rollNumber", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\Frame", "fromLink": "KrzysiekPiasecki/Bowling/Frame.html", "link": "KrzysiekPiasecki/Bowling/Frame.html#method_replaceRoll", "name": "KrzysiekPiasecki\\Bowling\\Frame::replaceRoll", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "KrzysiekPiasecki\\Bowling", "fromLink": "KrzysiekPiasecki/Bowling.html", "link": "KrzysiekPiasecki/Bowling/FrameInterface.html", "name": "KrzysiekPiasecki\\Bowling\\FrameInterface", "doc": "&quot;Represents a single frame&quot;"},
                                                        {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\FrameInterface", "fromLink": "KrzysiekPiasecki/Bowling/FrameInterface.html", "link": "KrzysiekPiasecki/Bowling/FrameInterface.html#method_score", "name": "KrzysiekPiasecki\\Bowling\\FrameInterface::score", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\FrameInterface", "fromLink": "KrzysiekPiasecki/Bowling/FrameInterface.html", "link": "KrzysiekPiasecki/Bowling/FrameInterface.html#method_rollNumber", "name": "KrzysiekPiasecki\\Bowling\\FrameInterface::rollNumber", "doc": "&quot;Roll with a given number&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\FrameInterface", "fromLink": "KrzysiekPiasecki/Bowling/FrameInterface.html", "link": "KrzysiekPiasecki/Bowling/FrameInterface.html#method_withRoll", "name": "KrzysiekPiasecki\\Bowling\\FrameInterface::withRoll", "doc": "&quot;A new frame with another roll&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\FrameInterface", "fromLink": "KrzysiekPiasecki/Bowling/FrameInterface.html", "link": "KrzysiekPiasecki/Bowling/FrameInterface.html#method_replaceRoll", "name": "KrzysiekPiasecki\\Bowling\\FrameInterface::replaceRoll", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\FrameInterface", "fromLink": "KrzysiekPiasecki/Bowling/FrameInterface.html", "link": "KrzysiekPiasecki/Bowling/FrameInterface.html#method_rollSequence", "name": "KrzysiekPiasecki\\Bowling\\FrameInterface::rollSequence", "doc": "&quot;A roll sequence&quot;"},
            
            {"type": "Class", "fromName": "KrzysiekPiasecki\\Bowling", "fromLink": "KrzysiekPiasecki/Bowling.html", "link": "KrzysiekPiasecki/Bowling/FrameSequenceInterface.html", "name": "KrzysiekPiasecki\\Bowling\\FrameSequenceInterface", "doc": "&quot;Represents a sequence of frames&quot;"},
                                                        {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\FrameSequenceInterface", "fromLink": "KrzysiekPiasecki/Bowling/FrameSequenceInterface.html", "link": "KrzysiekPiasecki/Bowling/FrameSequenceInterface.html#method_frameNumber", "name": "KrzysiekPiasecki\\Bowling\\FrameSequenceInterface::frameNumber", "doc": "&quot;Frame with the given number&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\FrameSequenceInterface", "fromLink": "KrzysiekPiasecki/Bowling/FrameSequenceInterface.html", "link": "KrzysiekPiasecki/Bowling/FrameSequenceInterface.html#method_linkFrame", "name": "KrzysiekPiasecki\\Bowling\\FrameSequenceInterface::linkFrame", "doc": "&quot;Link a new frame at the end of this sequence&quot;"},
            
            {"type": "Class", "fromName": "KrzysiekPiasecki\\Bowling", "fromLink": "KrzysiekPiasecki/Bowling.html", "link": "KrzysiekPiasecki/Bowling/PointSequence.html", "name": "KrzysiekPiasecki\\Bowling\\PointSequence", "doc": "&quot;Represents a sequence of points&quot;"},
                                                        {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\PointSequence", "fromLink": "KrzysiekPiasecki/Bowling/PointSequence.html", "link": "KrzysiekPiasecki/Bowling/PointSequence.html#method___construct", "name": "KrzysiekPiasecki\\Bowling\\PointSequence::__construct", "doc": "&quot;New points sequence with optional initial sequence of points&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\PointSequence", "fromLink": "KrzysiekPiasecki/Bowling/PointSequence.html", "link": "KrzysiekPiasecki/Bowling/PointSequence.html#method_addPoints", "name": "KrzysiekPiasecki\\Bowling\\PointSequence::addPoints", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\PointSequence", "fromLink": "KrzysiekPiasecki/Bowling/PointSequence.html", "link": "KrzysiekPiasecki/Bowling/PointSequence.html#method_addPointSequence", "name": "KrzysiekPiasecki\\Bowling\\PointSequence::addPointSequence", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "KrzysiekPiasecki\\Bowling", "fromLink": "KrzysiekPiasecki/Bowling.html", "link": "KrzysiekPiasecki/Bowling/PointSequenceInterface.html", "name": "KrzysiekPiasecki\\Bowling\\PointSequenceInterface", "doc": "&quot;Represents a sequence of points&quot;"},
                                                        {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\PointSequenceInterface", "fromLink": "KrzysiekPiasecki/Bowling/PointSequenceInterface.html", "link": "KrzysiekPiasecki/Bowling/PointSequenceInterface.html#method_addPoints", "name": "KrzysiekPiasecki\\Bowling\\PointSequenceInterface::addPoints", "doc": "&quot;Add given points to a sequence&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\PointSequenceInterface", "fromLink": "KrzysiekPiasecki/Bowling/PointSequenceInterface.html", "link": "KrzysiekPiasecki/Bowling/PointSequenceInterface.html#method_addPointSequence", "name": "KrzysiekPiasecki\\Bowling\\PointSequenceInterface::addPointSequence", "doc": "&quot;Add points from other points sequence&quot;"},
            
            {"type": "Class", "fromName": "KrzysiekPiasecki\\Bowling", "fromLink": "KrzysiekPiasecki/Bowling.html", "link": "KrzysiekPiasecki/Bowling/Roll.html", "name": "KrzysiekPiasecki\\Bowling\\Roll", "doc": "&quot;Represents a single roll&quot;"},
                                                        {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\Roll", "fromLink": "KrzysiekPiasecki/Bowling/Roll.html", "link": "KrzysiekPiasecki/Bowling/Roll.html#method___construct", "name": "KrzysiekPiasecki\\Bowling\\Roll::__construct", "doc": "&quot;A new roll with number of pins knocked down&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\Roll", "fromLink": "KrzysiekPiasecki/Bowling/Roll.html", "link": "KrzysiekPiasecki/Bowling/Roll.html#method_pins", "name": "KrzysiekPiasecki\\Bowling\\Roll::pins", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\Roll", "fromLink": "KrzysiekPiasecki/Bowling/Roll.html", "link": "KrzysiekPiasecki/Bowling/Roll.html#method_withPoints", "name": "KrzysiekPiasecki\\Bowling\\Roll::withPoints", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\Roll", "fromLink": "KrzysiekPiasecki/Bowling/Roll.html", "link": "KrzysiekPiasecki/Bowling/Roll.html#method_pointSequence", "name": "KrzysiekPiasecki\\Bowling\\Roll::pointSequence", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\Roll", "fromLink": "KrzysiekPiasecki/Bowling/Roll.html", "link": "KrzysiekPiasecki/Bowling/Roll.html#method_score", "name": "KrzysiekPiasecki\\Bowling\\Roll::score", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "KrzysiekPiasecki\\Bowling", "fromLink": "KrzysiekPiasecki/Bowling.html", "link": "KrzysiekPiasecki/Bowling/RollInterface.html", "name": "KrzysiekPiasecki\\Bowling\\RollInterface", "doc": "&quot;Represents a single roll&quot;"},
                                                        {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\RollInterface", "fromLink": "KrzysiekPiasecki/Bowling/RollInterface.html", "link": "KrzysiekPiasecki/Bowling/RollInterface.html#method_pins", "name": "KrzysiekPiasecki\\Bowling\\RollInterface::pins", "doc": "&quot;Number of pins knocked down&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\RollInterface", "fromLink": "KrzysiekPiasecki/Bowling/RollInterface.html", "link": "KrzysiekPiasecki/Bowling/RollInterface.html#method_withPoints", "name": "KrzysiekPiasecki\\Bowling\\RollInterface::withPoints", "doc": "&quot;A new roll with a given points added to current score&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\RollInterface", "fromLink": "KrzysiekPiasecki/Bowling/RollInterface.html", "link": "KrzysiekPiasecki/Bowling/RollInterface.html#method_pointSequence", "name": "KrzysiekPiasecki\\Bowling\\RollInterface::pointSequence", "doc": "&quot;A point sequence for this roll&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\RollInterface", "fromLink": "KrzysiekPiasecki/Bowling/RollInterface.html", "link": "KrzysiekPiasecki/Bowling/RollInterface.html#method_score", "name": "KrzysiekPiasecki\\Bowling\\RollInterface::score", "doc": "&quot;Total score&quot;"},
            
            {"type": "Class", "fromName": "KrzysiekPiasecki\\Bowling", "fromLink": "KrzysiekPiasecki/Bowling.html", "link": "KrzysiekPiasecki/Bowling/RollSequence.html", "name": "KrzysiekPiasecki\\Bowling\\RollSequence", "doc": "&quot;Represents a sequence of rolls&quot;"},
                                                        {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\RollSequence", "fromLink": "KrzysiekPiasecki/Bowling/RollSequence.html", "link": "KrzysiekPiasecki/Bowling/RollSequence.html#method___construct", "name": "KrzysiekPiasecki\\Bowling\\RollSequence::__construct", "doc": "&quot;New roll sequence with a given sequence of rolls&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\RollSequence", "fromLink": "KrzysiekPiasecki/Bowling/RollSequence.html", "link": "KrzysiekPiasecki/Bowling/RollSequence.html#method_rollNumber", "name": "KrzysiekPiasecki\\Bowling\\RollSequence::rollNumber", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\RollSequence", "fromLink": "KrzysiekPiasecki/Bowling/RollSequence.html", "link": "KrzysiekPiasecki/Bowling/RollSequence.html#method_appendRoll", "name": "KrzysiekPiasecki\\Bowling\\RollSequence::appendRoll", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "KrzysiekPiasecki\\Bowling", "fromLink": "KrzysiekPiasecki/Bowling.html", "link": "KrzysiekPiasecki/Bowling/RollSequenceInterface.html", "name": "KrzysiekPiasecki\\Bowling\\RollSequenceInterface", "doc": "&quot;Represents a sequence of rolls&quot;"},
                                                        {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\RollSequenceInterface", "fromLink": "KrzysiekPiasecki/Bowling/RollSequenceInterface.html", "link": "KrzysiekPiasecki/Bowling/RollSequenceInterface.html#method_rollNumber", "name": "KrzysiekPiasecki\\Bowling\\RollSequenceInterface::rollNumber", "doc": "&quot;A roll with a given number&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\RollSequenceInterface", "fromLink": "KrzysiekPiasecki/Bowling/RollSequenceInterface.html", "link": "KrzysiekPiasecki/Bowling/RollSequenceInterface.html#method_appendRoll", "name": "KrzysiekPiasecki\\Bowling\\RollSequenceInterface::appendRoll", "doc": "&quot;Append a new roll&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\RollSequenceInterface", "fromLink": "KrzysiekPiasecki/Bowling/RollSequenceInterface.html", "link": "KrzysiekPiasecki/Bowling/RollSequenceInterface.html#method_count", "name": "KrzysiekPiasecki\\Bowling\\RollSequenceInterface::count", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\RollSequenceInterface", "fromLink": "KrzysiekPiasecki/Bowling/RollSequenceInterface.html", "link": "KrzysiekPiasecki/Bowling/RollSequenceInterface.html#method_getIterator", "name": "KrzysiekPiasecki\\Bowling\\RollSequenceInterface::getIterator", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "KrzysiekPiasecki\\Bowling", "fromLink": "KrzysiekPiasecki/Bowling.html", "link": "KrzysiekPiasecki/Bowling/ScoreInterface.html", "name": "KrzysiekPiasecki\\Bowling\\ScoreInterface", "doc": "&quot;Represents an instance with a score points&quot;"},
                                                        {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\ScoreInterface", "fromLink": "KrzysiekPiasecki/Bowling/ScoreInterface.html", "link": "KrzysiekPiasecki/Bowling/ScoreInterface.html#method_score", "name": "KrzysiekPiasecki\\Bowling\\ScoreInterface::score", "doc": "&quot;A score points&quot;"},
            
            {"type": "Class", "fromName": "KrzysiekPiasecki\\Bowling", "fromLink": "KrzysiekPiasecki/Bowling.html", "link": "KrzysiekPiasecki/Bowling/SequenceInterface.html", "name": "KrzysiekPiasecki\\Bowling\\SequenceInterface", "doc": "&quot;Represents a sequence of elements&quot;"},
                                                        {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\SequenceInterface", "fromLink": "KrzysiekPiasecki/Bowling/SequenceInterface.html", "link": "KrzysiekPiasecki/Bowling/SequenceInterface.html#method_count", "name": "KrzysiekPiasecki\\Bowling\\SequenceInterface::count", "doc": "&quot;Number of sequence elements&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\SequenceInterface", "fromLink": "KrzysiekPiasecki/Bowling/SequenceInterface.html", "link": "KrzysiekPiasecki/Bowling/SequenceInterface.html#method_getIterator", "name": "KrzysiekPiasecki\\Bowling\\SequenceInterface::getIterator", "doc": "&quot;A sequence element iterator&quot;"},
            
            {"type": "Trait", "fromName": "KrzysiekPiasecki\\Bowling", "fromLink": "KrzysiekPiasecki/Bowling.html", "link": "KrzysiekPiasecki/Bowling/SequenceTrait.html", "name": "KrzysiekPiasecki\\Bowling\\SequenceTrait", "doc": "&quot;Represents a sequence of elements&quot;"},
                                                        {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\SequenceTrait", "fromLink": "KrzysiekPiasecki/Bowling/SequenceTrait.html", "link": "KrzysiekPiasecki/Bowling/SequenceTrait.html#method_count", "name": "KrzysiekPiasecki\\Bowling\\SequenceTrait::count", "doc": "&quot;Number of sequence elements&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Bowling\\SequenceTrait", "fromLink": "KrzysiekPiasecki/Bowling/SequenceTrait.html", "link": "KrzysiekPiasecki/Bowling/SequenceTrait.html#method_getIterator", "name": "KrzysiekPiasecki\\Bowling\\SequenceTrait::getIterator", "doc": "&quot;A sequence element iterator&quot;"},
            
            
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


