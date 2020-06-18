import React, {Component} from 'react';

class SideArea extends Component {
	render() {
		return (
			<div className="sideArea">
				<h1>InstantTable</h1>
				<div className="area _intro">
					<p>α版：使い方</p>
					<ol>
						<li>最大で5行：7列の表を作れます。</li>
						<li>全てのセルに値を入力できます。</li>
						<li>保存はできません。<br />作成中に"リロード"や"戻る"をしないよう気をつけてください。</li>
						<li>完成したらスクショしてブログや資料に使ってください。</li>
						<li>ソースコードは<a className="gtm-link github" href="https://github.com/jiiiimy/InstantTable">Github</a>に公開しています。</li>
						<li>感想や要望など、ぜひ下記フォームからお送りください。</li>
					</ol>
				</div>
				<div className="area _contact">
					<form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeVVYxxvYDpcpkBAmc_5m_gezZIHdbRFBX_S43GjjWORRHPXQ/formResponse">
						<textarea className="_textarea" name="entry.1843453482" placeholder="感想や要望をお寄せください。GoogleFormを使用しています。送信すると作成中の表はリセットされてしまいますのでご注意ください。" required></textarea>
						<button className="_submit" type="submit"><span>送信</span></button>
					</form>
				</div>
			</div>
		)
	}
}

export default SideArea;